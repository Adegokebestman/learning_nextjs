import React from 'react'
import Image from 'next/image'
import styles from './page.module.css';
import Aboutimage from 'public/hand-holding-phone-mockup.png'
import Button from '@/components/Button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
      <Image src='https://images.unsplash.com/photo-1687120484923-542ddb1edb63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' className={styles.img} alt='about'
      fill={true} />
      <div className={styles.imgText}>
    <h1>Digital Solutions</h1>
    <h2>Handcrafting Digital Experience</h2>
      </div>
      </div>
      <div className={styles.textContainer}>
      <div className={styles.item}>
    <h1>Who we are?</h1>
    <p>In the updated code, I added an useEffect hook that triggers the search when the searchTerm value changes. It makes an asynchronous
     request to search for products based on the entered search term.</p>
      </div>
      <div className={styles.item}>
      <h1 className={styles.title}>What we do?</h1>
      <p>In the updated code, I added an useEffect hook that triggers the search when the searchTerm value changes.
      It makes an asynchronous request to search for products based on the entered search term. The setProducts function is called with the matched
      products to update the state and display the search results.
      Now, as the user types in the search input, the search
      will be performed dynamically, and the products will be updated accordingly.
      </p>
    <Button url="/contact" text="contact" />
      </div>
      </div>
    </div>
  )
}

export default About