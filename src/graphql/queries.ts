import { gql } from "@apollo/client";

export const LOAD_ADVISORS = gql`
query {
  Advisors {
    name,
    id,
    jobTitle,
    badge,
    desciption,
    status,
    review,
    languages,
    image    
  }
}
`;