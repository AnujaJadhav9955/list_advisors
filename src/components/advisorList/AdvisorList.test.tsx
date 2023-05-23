import { LOAD_ADVISORS } from "../../graphql/queries";
import { render, screen } from "@testing-library/react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import AdvisorList from "./AdvisorList";
import "@testing-library/jest-dom";
import { MockedProvider } from "@apollo/client/testing";
import {
  AdvisorContext,
  AdvisorContextType,
} from "../../context/AdvisorContext";

describe("Testing Context Consumer", () => {
  let providerProps: AdvisorContextType;
  beforeEach(
    () =>
      (providerProps = {
        status: { Online: true, Offline: false },
        setSortBy: jest.fn(),
        sortBy: "rating",
        handleStatusChange: jest.fn(),
        handleLanguageChange: jest.fn(),
        languages: {
          German: true,
          English: false,
          French: true,
          Spanish: true,
        },
      })
  );

  test("should render AdvisorList", async () => {
    const client = new ApolloClient({
      cache: new InMemoryCache(),
    });
    render(
      <ApolloProvider client={client}>
        <AdvisorContext.Provider value={providerProps}>
          <AdvisorList />
        </AdvisorContext.Provider>
      </ApolloProvider>
    );
  });
  test("should render AdvisorList with useQuery response", async () => {
    const cache = new InMemoryCache();
    const mocks = {
      request: {
        query: LOAD_ADVISORS,
        variables: { limit: 10 },
      },

      result: {
        data: {
          Advisors: [
            {
              name: "Jeanette Farrell",
              id: "33a78045-df16-414d-855a-3d1e479ff16a",
              jobTitle: "Human Division Planner",
              badge: "https://avatars.githubusercontent.com/u/58219056",
              desciption: "philosopher, educator, entrepreneur",
              status: "Offline",
              review: 2,
              languages: ["French", "Spanish", "German", "English"],
              image:
                "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1050.jpg",
            },
            {
              name: "Dr. Luis Jacobi Jr.",
              id: "757128c9-5b6d-44c8-ba93-dcee8d878e2d",
              jobTitle: "Central Mobility Specialist",
              badge: "https://avatars.githubusercontent.com/u/99633281",
              desciption: "smog lover, educator 🥞",
              status: "Offline",
              review: 2,
              languages: ["Spanish", "French", "English"],
              image: "https://avatars.githubusercontent.com/u/23840094",
            },
          ],
        },
      },
    };

    render(
      <MockedProvider cache={cache} mocks={[mocks]} addTypename={true}>
        <AdvisorContext.Provider value={providerProps}>
          <AdvisorList />
        </AdvisorContext.Provider>
      </MockedProvider>
    );
    expect(await screen.findByText("Loading...")).toBeDefined();
  });
});
