// Import project assets
import project1Image from '../assets/projects/project1-image.jpeg';
import project1VideoUrl from '../assets/projects/project1-video.mp4?url';
import project2Image from '../assets/projects/project2-image.jpeg';
import project2VideoUrl from '../assets/projects/project2-video.mp4?url';
import project3Image from '../assets/projects/project3-image.jpeg';
import project3VideoUrl from '../assets/projects/project3-video.mp4?url';
import project4Image from '../assets/projects/project4-image.jpeg';
import project4Image2 from '../assets/projects/project4-image2.jpeg';
import project5Image from '../assets/projects/project5-image.jpeg';
import project5VideoUrl from '../assets/projects/project5-video.mp4?url';

export interface Project {
  id: number;
  title: string;
  image: string;
  video: string;
  description: string;
  isLandscape?: boolean; // Optional property to indicate landscape layout
  secondImage?: string; // Optional second image for projects that use image instead of video
  useImageAsVideo?: boolean; // Optional property to use second image instead of video
  isReversedAspectRatio?: boolean; // Optional property for reversed aspect ratios (image 16:9, video 9:16)
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Autotracking Theodolite System for Upper-Air Observation using Pibal Integrated with Website-Based Automatic Data Logging (2025)',
    image: project1Image,
    video: project1VideoUrl,
    description: 'This project develops an automatic theodolite capable of tracking (autotracking) pilot balloons (pibals) in the atmosphere. The system integrates stepper motor control for azimuth and elevation with a computer vision–based detection method using a phone camera. The pibal’s position is detected in real time from video frames and then converted into motor movements so that the theodolite continuously points at the target. Azimuth and elevation data are also calculated from motor step counts and transmitted wirelessly via an ESP32 to the server. The front-end website displays the data in tables and charts, while also supporting automatic data logging for storage and historical analysis.'
  },
  {
    id: 2,
    title: 'AIR QUALITY MONITORING UAV (AQMU) FOR KONTES ROBOT TERBANG INDONESIA 2023',
    image: project2Image,
    video: project2VideoUrl,
    description: 'It is an unmanned aerial vehicle (UAV) with a mission to monitor air quality in areas that are difficult to reach, such as forest fires. This UAV is built with a fixed-wing aircraft configuration and uses a Pixhawk flight controller. The monitored air quality data includes CO using the MQ7 sensor and PM2.5 using the ZH03B sensor. The data can then be monitored through a web application developed with the ReactJS library and the JavaScript programming language.'
  },
  {
    id: 3,
    title: 'Long Endurance Low Altitude UAV (LELA) FOR KONTES ROBOT TERBANG INDONESIA 2024',
    image: project3Image,
    video: project3VideoUrl,
    description: 'It is an unmanned aerial vehicle (UAV) built with a fixed-wing configuration, using a SpeedyBee F405 flight controller and a Raspberry Pi 3 mini PC for OpenCV video image processing. The video feed comes from a CCTV camera, which is streamed to the mini PC for image processing. This UAV also has a mission to drop payloads at detected hotspot points, with the payload release mechanism operated by a servo motor.',
    isLandscape: true
  },
  {
    id: 4,
    title: 'Air Quality Monitoring Device in Kalibaru Subdistrict, North Jakarta',
    image: project4Image,
    video: 'https://via.placeholder.com/640x360/2d3748/ffffff?text=Analytics+Demo',
    description: 'This device is used to monitor air quality, implemented in Kalibaru Subdistrict, North Jakarta, in 2024. The observed parameters in this device are CO and PM2.5. It uses an ESP32 as the central system controller, a GP2Y1010AU0F sensor for PM2.5, and an MQ7 sensor for CO. The CO and PM2.5 data are then calculated into the Air Pollution Standard Index (ISPU) and converted into environmental pollution levels based on the regulations of the Ministry of Environment. The air quality parameters and their index interpretation are displayed on an LED matrix.',
    secondImage: project4Image2,
    useImageAsVideo: true
  },
  {
    id: 5,
    title: 'Sumo Robot FOR TECHNOCORNER COMPETITION HELD BY UNIVERSITAS GAJAHMADA 2019',
    image: project5Image,
    video: project5VideoUrl,
    description: 'A competitive sumo robot designed for autonomous battles. Built with advanced sensors and motor control systems, this robot can detect opponents and execute strategic movements to push them out of the ring. Features include ultrasonic sensors for distance measurement, gyroscope for balance control, and powerful motors for quick maneuvers.',
    isReversedAspectRatio: true
  }
];