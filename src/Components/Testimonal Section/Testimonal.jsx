import React, { useRef, useEffect } from 'react'
import next_icon from '../../assets/images/next-icon.png'
import back_icon from '../../assets/images/back-icon.png'
import user_1 from '../../assets/images/user-1.png'
import user_2 from '../../assets/images/user-2.png'
import user_3 from '../../assets/images/user-3.png'
import user_4 from '../../assets/images/user-4.png'

import './Testimonal.css'

const Testimonal = () => {
  const slider = useRef(null)
  let tx = 0

  const slideForward = () => {
    const isMobile = window.innerWidth <= 425

    if (isMobile) {
      if (tx > -75) tx -= 25   // mobile → 4 slides
    } else {
      if (tx > -50) tx -= 25   // desktop → 3 slides
    }

    slider.current.style.transform = `translateX(${tx}%)`
  }

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25
      slider.current.style.transform = `translateX(${tx}%)`
    }
  }

  /* 🔥 FIX: resize par slider reset */
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 425

      if (!isMobile && tx < -50) {
        tx = -50
        slider.current.style.transform = `translateX(${tx}%)`
      }

      if (isMobile && tx < -75) {
        tx = -75
        slider.current.style.transform = `translateX(${tx}%)`
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='testimonials-section container' id='testimonial'>
      <div className="title">
        <p>TESTIMONIALS</p>
        <h2>What Student Says</h2>
      </div>

      <div className='testimonials'>
        <img
          className='next-btn'
          src={next_icon}
          onClick={slideForward}
          alt="next"
        />

        <img
          className='back-btn'
          src={back_icon}
          onClick={slideBackward}
          alt="back"
        />

        <div className="slider">
          <ul ref={slider}>
            {/* 1 */}
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>

            {/* 2 */}
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>

            {/* 3 */}
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>Emily Williams</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>

            {/* 4 */}
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Testimonal
