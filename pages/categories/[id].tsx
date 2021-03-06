import type { NextPage, GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import styles from 'styles/Categories.module.css'
import * as C from "Const/Const";
import * as H from "Hooks/Hooks";
import { useState, useEffect } from 'react';
import CategoryContainer from 'Components/CategoryContainer/index.CategoryContainer';
import ProductContainer from 'Components/ProductContainer/index.ProductContainer';
import NavBar from 'Components/Nav/NavBar';

interface CategoriesProps {
  currentPage: string,
  curruntID: string,
  categoryProps: any,
  category1Props: any[]
}

const Categories: NextPage<CategoriesProps> = ({currentPage, curruntID, categoryProps, category1Props}) => {
    const router = useRouter();
    return (
      <>
      <NavBar/>
      <div className={styles.container}>
        <main className={styles.main}>
          {curruntID !== "1"?
          <CategoryContainer CategoryData={categoryProps} currentPage={currentPage}/>
          :
          <ProductContainer ProductData = {category1Props}/>
        }
        </main>
        <footer className={styles.footer}>
          
        </footer>
      </div>
      </>
    )
  }
  
export const getServerSideProps: GetServerSideProps = async (context:GetServerSidePropsContext) => {
  const curruntID = context.params? context.params.id: undefined;
  const categoryProps = await H.Fetch(C.CONCATEGORY_API + curruntID + C.NESTED);
  const category1Props = await H.Fetch(C.CONITEM_API + C.SOON);
  return {
    props: {
      currentPage: 'categories',
      curruntID: curruntID,
      categoryProps: categoryProps.conCategory1.conCategory2s,
      category1Props: category1Props.conItems.sort((a: { id: number; }, b: { id: number; })=> a.id - b.id)
    },
  };
};


  export default Categories