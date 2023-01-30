import React, { useEffect } from 'react'
import Nav from '../../components/nav/nav'
import { getPhotos, StatePhoto } from '../../state/slices/photoSlice'
import styles from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/button/button'
import Img from '../../components/img/img'
import { AppDispatch } from '../../state/reduser'

export default function Index() {
    const dispatch: AppDispatch = useDispatch()
    useEffect(() => {
        dispatch(getPhotos());
    }, [dispatch]);
    const photos = useSelector((state: any) => state.photos)
    console.log(photos)
    return (
        <div>
            <Nav></Nav>
            <h2 className={styles.index__title}>Welcome to the gallery</h2>
            <div style={{ margin: '0 auto', width: '100%', textAlign: 'center' }}>
                {photos.length > 0 ?
                    photos[0].map((photo: StatePhoto) => <Img {...photo} key={photo.id}></Img>)
                    : <h2>Loading</h2>}
            </div>
            <Button onClick={() => console.log(photos)}>Console store</Button>

        </div>
    )
}
