import React from "react"

import Container from "../components/container"
import styles from "./about-css-modules.module.css"
// console.log(styles)

const User = props =>
	<div className={styles.user}>
		<img src={props.avatar} className={styles.avatar} />
		<div className={styles.description}>
			<h2 className={styles.username}>
				{props.username}
			</h2>
			<p className={styles.excerpt}>
				{props.bio}
			</p>
		</div>
	</div>

export default () =>
  <Container>
    <h1>About CSS Modules</h1>
    <p>Monkeys of the Month</p>
    <User
      username="Happy Monkey"
      avatar="http://www.clker.com/cliparts/4/0/3/b/1194985499295464746happy_monkey_benji_park_01.svg.med.png"
      bio="I'm happy monkey. Today was a good day."
    />

    <User
      username="Sad Monkey"
      avatar="http://www.clker.com/cliparts/j/Y/v/7/8/E/monkey3-md.png"
      bio="I'm sad monkey. Today was not a good day."
    />

    <User
    	username="Sailor Monkey"
    	avatar="http://www.clker.com/cliparts/a/4/6/5/11949837501222258869sailor_monkey_nicu_bucul_01.svg.med.png"
    	bio="I am a seafaring monkey. I prefer the high seas to high trees. Sea-salted bananas are scrumptious."
    />

  </Container>