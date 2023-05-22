import React, { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { AdvisorContext, AdvisorContextType } from "./context/AdvisorContext";
import AdvisorList from "./components/advisorList/AdvisorList";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import Filter from "./components/common/Filter";
import Drawer from "./components/common/Drawer";

const customRender = (ui: ReactNode, providerProps: AdvisorContextType) => {
  const link = from([new HttpLink({ uri: "http://localhost:6969/graphql" })]);

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });
  return render(
    <ApolloProvider client={client}>
      <AdvisorContext.Provider value={providerProps}>
        {ui}
      </AdvisorContext.Provider>
    </ApolloProvider>
  );
};

describe("Testing Context Consumer", () => {
  let providerProps: AdvisorContextType;
  beforeEach(
    () =>
      (providerProps = {
        status: { online: true, offline: false },
        setSortBy: jest.fn(),
        sortBy: "rating",
        handleStatusChange: jest.fn(),
        handleLanguageChange: jest.fn(),
        languages: {
          german: true,
          english: false,
          french: true,
          spanish: true,
        },
      })
  );

  test("Should render AdvisorList", () => {
    customRender(<AdvisorList />, { ...providerProps });
    expect(screen.getByTestId("scroll")).toBeDefined();
  });

  test("Should render the Filter component", () => {
    customRender(<Filter />, { ...providerProps });
    expect(screen.getByTestId("filter")).toBeDefined();
  });
  test("Should render the Drawer component", () => {
    customRender(<Drawer />, { ...providerProps });
    expect(screen.getByTestId("drawer")).toBeDefined();
  });
});
