import { fetchGetShoes, fetchGetShoesById } from "entities/Shoes/api";
import { IShoesItem } from "entities/Shoes/types";
import { GetStaticProps } from "next";
import { ShoesPage } from "pages/ShoesPage";
import { FC } from "react";
import { H2 } from "shared/ui/typography/titles";

export const Shoes: FC<IShoesItem> = (props) => {
  if (!props.id) {
    return <H2>Item not found</H2>;
  }
  return <ShoesPage {...props} />;
};

export default Shoes;

export async function getStaticPaths() {
  const shoes = await fetchGetShoes();

  const paths = shoes.map((shoe) => ({
    params: { model: shoe.id.toString() },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) return { props: {} };

  const id = params.model as string;
  if (!id || isNaN(+id)) return { props: {} };

  const shoesParams = await fetchGetShoesById(+id);

  return { props: { ...shoesParams } };
};
