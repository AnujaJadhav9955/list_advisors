import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Advisor from "./Advisor";
import { Grid } from "@mui/material";
import { AdvisorType } from "./Advisor";
import { useContext } from "react";
import { AdvisorContext } from "../../context/AdvisorContext";
import InfiniteScroll from "react-infinite-scroll-component";

const AdvisorList = () => {
  const { sortBy } = useContext(AdvisorContext);
  const { status, languages } = useContext(AdvisorContext);
  const [advisors, setAdvisors] = useState<AdvisorType[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchData = (page: number) => {
    const advisorsArray = [];
    for (let i = 0; i < 10; i++) {
      let record = faker.helpers.uniqueArray(
        [
          {
            id: faker.string.uuid(),
            name: faker.person.fullName(),
            jobTitle: faker.person.jobTitle(),
            desciption: faker.person.bio(),
            badge: faker.image.avatarGitHub(),
            image: faker.image.avatar(),
            status: faker.helpers.arrayElement(["online", "offline"]),
            review: faker.number.int({ min: 0, max: 5 }),
            languages: faker.helpers.arrayElements([
              "german",
              "english",
              "french",
              "spanish",
            ]),
          },
        ],
        10
      );
      advisorsArray.push(...record);
    }
    if (page === 10) {
      setHasMore(false);
    }
    setAdvisors([...advisors, ...advisorsArray]);
  };

  const [filteredAdvisors, setFilteredAdvisors] =
    useState<AdvisorType[]>(advisors);

  useEffect(() => {
    let advisorsArray: AdvisorType[] = advisors;
    if (sortBy === "rating") {
      advisorsArray = [...advisorsArray].sort((a, b) => b.review - a.review);
    }
    const { online, offline } = status;
    advisorsArray = [...advisorsArray].filter((advisor) => {
      if (offline && !online) {
        return advisor.status === "offline";
      } else if (online && !offline) {
        return advisor.status === "online";
      } else {
        return true;
      }
    });

    const lang: string[] = [];
    Object.entries(languages).forEach(([key, value]) => {
      if (value) {
        lang.push(key);
      }
    });
    if (lang.length > 0) {
      advisorsArray = advisorsArray.filter((advisor) => {
        return advisor.languages.every((l) => lang.includes(l));
      });
    }

    setFilteredAdvisors(advisorsArray);
  }, [sortBy, status, languages, advisors]);

  return (
    <InfiniteScroll
      dataLength={advisors.length}
      next={() => setPage(page + 1)}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <Grid container bgcolor={"#f5f5f5"} overflow={"auto"}>
        {filteredAdvisors.map((advisor: AdvisorType) => {
          return <Advisor key={advisor.id} advisor={advisor} />;
        })}
      </Grid>
    </InfiniteScroll>
  );
};

export default AdvisorList;
