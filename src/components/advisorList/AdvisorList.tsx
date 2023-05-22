import React, { useEffect, useState } from "react";
import Advisor from "../advisor/Advisor";
import { Grid } from "@mui/material";
import { AdvisorType } from "../advisor/Advisor";
import { useContext } from "react";
import { AdvisorContext } from "../../context/AdvisorContext";
import InfiniteScroll from "react-infinite-scroll-component";
import { useQuery } from "@apollo/client";
import { LOAD_ADVISORS } from "../../graphql/queries";

const AdvisorList = () => {
  const { sortBy } = useContext(AdvisorContext);
  const { status, languages } = useContext(AdvisorContext);
  const [advisors, setAdvisors] = useState<AdvisorType[]>([]);
  const [page, setPage] = useState(1);

  const { error, fetchMore } = useQuery(LOAD_ADVISORS, {
    variables: {
      offset: page,
      limit: 10,
    },
    onCompleted: (data) => {
      if (!advisors.length) {
        const { Advisors } = data;
        setAdvisors(Advisors);
        setPage(page + 1);
      }
    },
  });
  const getMoreAdvisors = async () => {
    const { data } = await fetchMore({
      variables: { page: page },
    });
    const { Advisors } = data;
    setAdvisors((prevAdvisors) => [...prevAdvisors, ...Advisors]);
    setPage(page + 1);
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
        return advisor.languages.some((l) => lang.includes(l));
      });
    }

    setFilteredAdvisors(advisorsArray);
  }, [sortBy, status, languages, advisors]);
  return (
    <InfiniteScroll
      data-testid={"scroller"}
      dataLength={advisors?.length}
      next={getMoreAdvisors}
      hasMore={page < 20}
      loader={
        error ? (
          <h4>{error.message}</h4>
        ) : (
          <h4 data-testid="scroll">Loading...</h4>
        )
      }
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <Grid container bgcolor={"#f5f5f5"} overflow={"auto"}>
        {filteredAdvisors?.map((advisor: AdvisorType) => {
          return <Advisor key={advisor.id} advisor={advisor} />;
        })}
      </Grid>
    </InfiniteScroll>
  );
};

export default React.memo(AdvisorList);
