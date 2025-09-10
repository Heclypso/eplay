import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices?: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const [promotions, setPromotions] = useState<Game[]>([])
  const [comingSoon, setComingSoon] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fakeapi-cyan.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromotions(res))
  }, [])

  useEffect(() => {
    fetch('https://fakeapi-cyan.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setComingSoon(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList games={promotions} title="Promoções" background="gray" />
      <ProductsList games={comingSoon} title="Em breve" background="black" />
    </>
  )
}

export default Home
