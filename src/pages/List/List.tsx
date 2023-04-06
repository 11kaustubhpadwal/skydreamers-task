import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import ListItem from "./ListItem";
import Loader from "../../components/Loader";
import { StyledButton } from "../../components/Button";
import { StyledInput } from "../../components/TextInput";
import { useGetListQuery } from "../../queries/list";

const List = () => {
  const [searchValue, setSearchValue] = useState("");

  const [sortBy, setSortBy] = useState("");

  const { data, isLoading, refetch, isFetching, isRefetching, error } =
    useGetListQuery(searchValue, sortBy);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  const handleSearch = () => refetch();

  const clearFilters = () => {
    setSortBy("");
    setSearchValue("");
  };

  useEffect(() => {
    refetch();
  }, [sortBy]);

  const loading = isLoading || isFetching || isRefetching;

  return (
    <>
      <Grid container mb={3}>
        <Grid item xs={12} sm>
          <StyledInput
            placeholder="e.g. react"
            value={searchValue}
            onChange={handleChangeSearch}
            disabled={loading}
          />
        </Grid>
        <Grid item xs={12} sm="auto">
          <StyledButton onClick={handleSearch} disabled={loading}>
            Search
          </StyledButton>
        </Grid>
      </Grid>
      <Grid container mb={3} spacing="1rem" alignItems={"center"}>
        <Grid item>
          <Typography>Sort by : </Typography>
        </Grid>
        <Grid item>
          <Typography
            fontSize={18}
            fontWeight={500}
            onClick={() => setSortBy("title")}
            sx={{
              textDecoration: sortBy === "title" ? "underline" : "none",
              cursor: "pointer",
            }}
          >
            Title
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography
            fontSize={18}
            fontWeight={500}
            onClick={() => setSortBy("description")}
            sx={{
              textDecoration: sortBy === "description" ? "underline" : "none",
              cursor: "pointer",
            }}
          >
            Description
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            fontWeight={500}
            onClick={clearFilters}
            sx={{
              cursor: "pointer",
            }}
          >
            Clear filters
          </Typography>
        </Grid>
      </Grid>
      {loading && <Loader />}
      {!loading && (
        <Grid
          container
          rowSpacing={"2rem"}
          columnSpacing={"2rem"}
          alignItems={"stretch"}
        >
          {data?.map((listItem) => (
            <Grid item md={12} lg={6}>
              <ListItem
                key={listItem.itemId}
                imageURL={listItem.image}
                title={listItem.title}
                description={listItem.description}
              />
            </Grid>
          ))}
        </Grid>
      )}
      {!loading && error && (
        <Typography fontSize={18} textAlign={"center"} m={2}>
          An error occurred. Please try again.
        </Typography>
      )}
      {!loading && data && data?.length <= 0 && (
        <Typography fontSize={18} textAlign={"center"} m={2}>
          No results found! Please try changing your search.
        </Typography>
      )}
    </>
  );
};

export default React.memo(List);
