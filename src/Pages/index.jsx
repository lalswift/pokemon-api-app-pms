import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Pagination,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL, getPokemonApiEndpoint } from "../api-constants/api-constants";
import Loader from "../components/common/Loader";

const HomePage = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonAPIData, setPokemonAPIData] = useState([]);
  const [count, setCount] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  const getPokemonAPIData = async () => {
    setShowLoader(true);
    try {
      const response = await axios.get(
        baseURL + getPokemonApiEndpoint(5, (currentPage - 1) * 5)
      );
      setCount(response?.data?.count);
      if (response?.status === 200) {
        setPokemonAPIData(response?.data?.results);
        setShowLoader(false);
      }
    } catch (err) {
      console.log("err");
      setShowLoader(false);
    }
  };

  useEffect(() => {
    getPokemonAPIData();
  }, [currentPage]);

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* <img src={require('../assets/images/Pokemon.png')} alt="Logo" style={{ width: 900, height: 150 }} /> */}
        <Typography variant="h1">Pokemon API</Typography>
      </div>

      <Divider sx={{ margin: 2 }} />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "stretch",
          padding: "0px 120px",
        }}
      >
        {pokemonAPIData?.map((item, index) => {
          const url = new URL(item?.url);
          return (
            <Card
              sx={{
                width: 315,
                margin: 2,
                justifyContent: "center",
                boxShadow: 3,
                backgroundColor: "#BFACE2",
                borderRadius: 6,
                ':hover': {
                  boxShadow: 20,
                },
              }}
              key={index}
              raised
            >
              {showLoader ? (
                <Loader showLoader={showLoader} />
              ) : (
                <CardMedia
                  sx={{ padding: 1, height: 300, width: "96%" }}
                  component="img"
                  height="300"
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                    url?.pathname?.split("/")[4]
                  }.svg`}
                  alt={item?.name}
                />
              )}

              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  {item?.name}
                </Typography>
              </CardContent>
              <Button
                style={{
                  backgroundColor: "#3D1766",
                  color: "white",
                  height: 50,
                  fontSize: 16,
                }}
                fullWidth
                onClick={() =>
                  navigate(
                    `/details/${url?.pathname?.split("/pokemon/")?.slice(1)}`
                  )
                }
              >
                View Details
              </Button>
            </Card>
          );
        })}
      </div>

      <Divider sx={{ margin: 2 }} />
      <Pagination
        style={{ margin: 24 }}
        color={"secondary"}
        count={Math.ceil(count / 5)}
        page={currentPage}
        onChange={(e, value) => {
          setCurrentPage(value);
        }}
        showFirstButton
        showLastButton
      />
    </div>
  );
};

export default HomePage;
