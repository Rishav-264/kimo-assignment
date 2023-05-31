"use client"

import styles from "./Categories.module.css";
import { useState } from "react";
import { CategoryType } from "@/app/models/category.interface";

export const Categories = () => {

    const [categories, setCategories] = useState<CategoryType[]>([
        {
          "name": "Adventure",
          "activities": [
            {
              "title": "Surfing in the waves of Waikiki"
            }
          ]
        },
        {
            "name": "Adventure",
            "activities": [
              {
                "title": "Surfing in the waves of Waikiki"
              }
            ]
          },
          {
            "name": "Adventure",
            "activities": [
              {
                "title": "Surfing in the waves of Waikiki"
              }
            ]
          },
          {
            "name": "Adventure",
            "activities": [
              {
                "title": "Surfing in the waves of Waikiki"
              }
            ]
          },
          {
            "name": "Adventure",
            "activities": [
              {
                "title": "Surfing in the waves of Waikiki"
              }
            ]
          }
      ])

    return (
        <div className={styles.container}>
            <div className={styles.categoryContainer}>
                <h3>Categories</h3>
                <div className={styles.categoryList}>
                    {categories.map((category)=>{
                        return(
                            <div className={styles.category}>
                                <p>{category?.name}</p>
                                <img src="/arrow_forward.svg" alt="arrow button"/>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.guide}>
            <h3>Travel Guide</h3>
            <div className={styles.guideContainer}>
                    <div className={styles.guideInfo}>
                        <h2>Hadwin Malone</h2>
                        <span>Guide since 2012</span>
                        <div className={styles.buttonOutline}>Contact</div>
                    </div>
                    <div className={styles.profilePicture}>
                        <img src="/GuideImage.png" alt="profile Picture" />
                    </div>
            </div>
            </div>
        </div>
    )
}