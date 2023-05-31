"use client"

import { useState, useEffect } from 'react';
import { TourismApi } from '@/app/api/api';
import { HighlightType } from '@/app/models/highlights.interface';
import axios from 'axios';

import styles from './Banner.module.css'
export const Banner = () => {

    useEffect(()=>{
        axios.get("https://web-dev.dev.kimo.ai/v1/categories").then((data)=>{
            console.log('HELLO',data);
        }).catch((error)=>{
            console.log("Error",error.message)
        })
    },[])

    return (
        <div className={styles.container}>
            <div className={styles.topNav}>
                <div className={styles.logo}>
                    <img src="/Aloha.svg" alt="logo"/>
                </div>
                <ul>
                    <li>Home</li>
                    <li>Surfing</li>
                    <li>Hula</li>
                    <li>Volcano</li>
                </ul>
                <div className={styles.button}>Book a trip</div>
            </div>
            <h1 className={styles.title}>Welcome <br /> to Hawai</h1>
        </div>
    )
}