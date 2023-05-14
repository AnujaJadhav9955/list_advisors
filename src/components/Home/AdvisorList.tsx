import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Advisor from "./Advisor";
import { Grid } from "@mui/material";
import { AdvisorType } from "./Advisor";
import { useContext } from "react";
import { AdvisorContext } from "../../context/AdvisorContext";

const AdvisorList = () => {
  const { sortBy } = useContext(AdvisorContext);
  let advisorsArray = [];
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
        },
      ],
      10
    );
    advisorsArray.push(...record);
  }
  const [advisors, setAdvisors] = useState<AdvisorType[]>(advisorsArray);
  useEffect(() => {
    const advisorsArray: AdvisorType[] = advisors;
    if (sortBy === "rating") {
      const sortedAdvisors: AdvisorType[] = [...advisorsArray].sort(
        (a, b) => b.review - a.review
      );
      setAdvisors(sortedAdvisors);
    }
  }, [sortBy]);

  return (
    <Grid container bgcolor={"#f5f5f5"} overflow={"auto"} marginTop={"80px"}>
      {advisors.map((advisor: AdvisorType) => {
        return <Advisor key={advisor.id} advisor={advisor} />;
      })}
    </Grid>
  );
};

export default AdvisorList;
