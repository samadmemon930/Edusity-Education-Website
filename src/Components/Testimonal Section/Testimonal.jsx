import React, { useRef, useEffect, useState } from 'react'
import next_icon from '../../assets/images/next-icon.png'
import back_icon from '../../assets/images/back-icon.png'
import user_1 from '../../assets/images/user-1.png'
import user_2 from '../../assets/images/user-2.png'
import user_3 from '../../assets/images/user-3.png'
import user_4 from '../../assets/images/user-4.png'
import './Testimonal.css'

const Testimonal = () => {
  const slider = useRef(null)

  // current slide index
  const [index, setIndex] = useState(0)

  // direction: 1 = forward, -1 = backward
  const [direction, setDirection] = useState(1)

  // max index
  const getMaxIndex = () => (window.innerWidth <= 425 ? 3 : 2)

  // apply transform
  useEffect(() => {
    slider.current.style.transform = `translateX(-${index * 25}%)`
  }, [index])

  // NEXT button
  const slideForward = () => {
    setIndex(prev => Math.min(prev + 1, getMaxIndex()))
    setDirection(1)
  }

  // BACK button
  const slideBackward = () => {
    setIndex(prev => Math.max(prev - 1, 0))
    setDirection(-1)
  }

  // 🔁 AUTO SLIDE (forward + backward)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => {
        const max = getMaxIndex()

        if (prev === max) {
          setDirection(-1)
          return prev - 1
        }

        if (prev === 0) {
          setDirection(1)
          return prev + 1
        }

        return prev + direction
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [direction])

  // resize fix
  useEffect(() => {
    const handleResize = () => {
      setIndex(prev => Math.min(prev, getMaxIndex()))
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
        {/* NEXT */}
        <img
          className='next-btn'
          src={next_icon}
          onClick={slideForward}
          alt="next"
          style={{
            opacity: index === getMaxIndex() ? 0.4 : 1,
            pointerEvents: index === getMaxIndex() ? 'none' : 'auto'
          }}
        />

        {/* BACK */}
        <img
          className='back-btn'
          src={back_icon}
          onClick={slideBackward}
          alt="back"
          style={{
            opacity: index === 0 ? 0.4 : 1,
            pointerEvents: index === 0 ? 'none' : 'auto'
          }}
        />

        <div className="slider">
          <ul ref={slider}>
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
