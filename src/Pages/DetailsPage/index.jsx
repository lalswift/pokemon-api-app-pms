import { KeyboardBackspace } from "@mui/icons-material";
import { Avatar, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  baseURL,
  getPokemonDetailsEndpoint,
} from "../../api-constants/api-constants";

const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemonDetails, setPokemonDetails] = useState({});
  const getPokemonDetails = async (id) => {
    try {
      const response = await axios.get(baseURL + getPokemonDetailsEndpoint(id));
      if (response?.status === 200) {
        setPokemonDetails(response?.data);
      }
    } catch (err) {
      console.log("err");
    }
  };

  useEffect(() => {
    getPokemonDetails(id);
  }, [id]);

  return (
    <>
      <Stack direction="row" justifyContent="space-between" pr={2} mb={2}>
        <Grid container>
          <Grid
            item
            xs={5.7}
            style={{ display: "flex", alignItems: "center", paddingLeft: 16 }}
          >
            <KeyboardBackspace />
            <Typography onClick={() => navigate("/")}><u>Go back</u></Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="h3" fontWeight="bold" pt={2}>
              Pokemon Details:
            </Typography>
          </Grid>
        </Grid>
      </Stack>
      <Divider />

      <Grid container>
        <Grid
          item
          xs={5.5}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <img
            src={pokemonDetails?.sprites?.other?.dream_world?.front_default}
            alt="front"
            style={{ width: 450, height: 450 }}
          />
        </Grid>

        <Grid item xs={0.1}>
          <Divider orientation="vertical" />
        </Grid>

        <Grid item xs={6.4} style={{ padding: 12 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              paddingBottom:12
            }}
          >
            {pokemonDetails?.forms?.map((poke, i) => {
              return (
                <Typography key={i} variant="h4">
                  Name: {poke?.name}
                </Typography>
              );
            })}

            <Chip
              label={`Height: ${pokemonDetails?.height}m`}
              color="error"
              variant="filled"
            />

            <Chip
              label={`Weight: ${pokemonDetails?.weight}lbs`}
              color="success"
              variant="filled"
            />

            <Chip
              label={`Base Experience: ${pokemonDetails?.base_experience}`}
              color="warning"
              variant="filled"
            />
          </div>

          <Divider />

          <Grid container>
            <Grid
              item
              xs={3.5}
              style={{
                margin: 16,
                borderRadius: 8,
                backgroundColor: "#1597BB",
                color: "white",
                padding: 12,
              }}
            >
              <Typography variant="h4">Abilities:</Typography>
              {pokemonDetails?.abilities?.map((poke, i) => {
                return (
                  <Typography key={i} variant="h6">
                    {poke?.ability?.name}
                  </Typography>
                );
              })}
            </Grid>
            <Grid item xs={0.1}>
              <Divider orientation="vertical" />
            </Grid>
            <Grid
              item
              xs={3.5}
              style={{
                margin: 16,
                borderRadius: 8,
                backgroundColor: "#F806CC",
                color: "white",
                padding: 12,
              }}
            >
              <Typography variant="h4">Stats:</Typography>
              {pokemonDetails?.stats?.map((stat, i) => {
                return (
                  <Typography key={i} variant="h6">
                    {stat?.stat?.name}: {stat?.base_stat}
                  </Typography>
                );
              })}
            </Grid>

            <Grid item xs={0.1}>
              <Divider orientation="vertical" />
            </Grid>

            <Grid
              item
              xs={3.5}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Avatar
                alt="Front"
                src={pokemonDetails?.sprites?.front_default}
                style={{ width: 120, height: 120, border: "2px solid black" }}
              />
              Front
              <Avatar
                alt="Front"
                src={pokemonDetails?.sprites?.back_default}
                style={{ width: 120, height: 120, border: "2px solid black" }}
              />
              Back
            </Grid>
          </Grid>

          <Divider />

          <Grid container>
            <Grid
              item
              xs={5.5}
              style={{
                margin: 16,
                borderRadius: 8,
                backgroundColor: "orange",
                color: "white",
                padding: 12,
              }}
            >
              <Typography variant="h4">Moves:</Typography>
              {pokemonDetails?.moves
                ?.filter((i, index) => index < 7)
                ?.map((moves, i) => {
                  return (
                    <Typography key={i} variant="h6">
                      {moves?.move?.name}
                    </Typography>
                  );
                })}
            </Grid>
            <Grid item xs={0.1}>
              <Divider orientation="vertical" />
            </Grid>
            <Grid
              item
              xs={4.5}
              style={{
                margin: 16,
                borderRadius: 8,
                backgroundColor: "#54B435",
                color: "white",
                padding: 12,
              }}
            >
              <Typography variant="h4">Types:</Typography>
              {pokemonDetails?.types?.map((types, i) => {
                return (
                  <Typography key={i} variant="h6">
                    {types?.type?.name}
                  </Typography>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default DetailsPage;
