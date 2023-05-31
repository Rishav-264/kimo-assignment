"use client"

import { useState, useEffect } from 'react';
import { HighlightType } from '@/app/models/highlights.interface';
import styles from './Highlights.module.css';

export const Highlights = () =>{

    const [highlights, setHighlights] = useState<HighlightType[]>([
        {
            "title": "Surfing",
            "description": "Best Hawaiian islands for surfing.",
            "image": "https://storage.googleapis.com/topics-images/web-dev-images/surfing_low.png"
        },
        {
            "title": "Surfing",
            "description": "Best Hawaiian islands for surfing.",
            "image": "https://storage.googleapis.com/topics-images/web-dev-images/surfing_low.png"
        },
        {
            "title": "Surfing",
            "description": "Best Hawaiian islands for surfing.",
            "image": "https://storage.googleapis.com/topics-images/web-dev-images/surfing_low.png"
        }
    ]);

    return (
        <div className={styles.container}>
            <h3>Highlights</h3>
            <div className={styles.cardList}>
                {highlights.map((highlight)=>{
                    return (
                        <div className={styles.card} key={highlight.title}>
                            <img src={highlight.image} alt={highlight.title} className={styles.image} />
                            <h2>{highlight.title}</h2>
                            <p>{highlight.description} </p>
                            <div>
                                <img src="./Arrow.svg" alt="arrow button" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}