// Import project assets
import project1Image from '../assets/projects/project1-image.jpeg';
import project1Image1 from '../assets/projects/project1-image-1.png';
import project1Image2 from '../assets/projects/project1-image-2.png';
import project1Image3 from '../assets/projects/project1-image-3.png';
import project1Image4 from '../assets/projects/project1-image-4.jpeg';
import project1Image5 from '../assets/projects/project1-image-5.png';
import project1Image6 from '../assets/projects/project1-image-6.png';
import project1Image7 from '../assets/projects/project1-image-7.png';
import project1Image8 from '../assets/projects/project1-image-8.png';
import project1VideoUrl from '../assets/projects/project1-video.mp4?url';
import project2Image from '../assets/projects/project2-image.jpeg';
import project2Image1 from '../assets/projects/project2-image-1.png';
import project2Image2 from '../assets/projects/project2-image-2.jpeg';
import project2Image3 from '../assets/projects/project2-image-3.jpeg';
import project2Image4 from '../assets/projects/project2-image-4.png';
import project2Image5 from '../assets/projects/project2-image-5.jpeg';
import project2Image6 from '../assets/projects/project2-image-6.png';
import project2VideoUrl from '../assets/projects/project2-video.mp4?url';
import project2VideoUrl1 from '../assets/projects/project2-video-1.mp4?url';
import project3Image from '../assets/projects/project3-image.jpeg';
import project3Image1 from '../assets/projects/project3-image-1.png';
import project3Image2 from '../assets/projects/project3-image-2.jpeg';
import project3Image3 from '../assets/projects/project3-image-3.jpeg';
import project3VideoUrl from '../assets/projects/project3-video.mp4?url';
import project4Image from '../assets/projects/project4-image.jpeg';
import project4Image2 from '../assets/projects/project4-image2.jpeg';
import project4Image3 from '../assets/projects/project4-image-3.jpeg';
import project4Image4 from '../assets/projects/project4-image-4.jpeg';
import project5Image from '../assets/projects/project5-image.jpeg';
import project5Image1 from '../assets/projects/project5-image-1.png';
import project5Image2 from '../assets/projects/project5-image-2.jpeg';
import project5VideoUrl from '../assets/projects/project5-video.mp4?url';

export interface GalleryImage {
    id: number;
    thumbnail: string;
    fullSize: string;
    caption: string;
    description?: string;
}

export interface Project {
    id: number;
    title: string;
    image: string;
    video: string;
    description: string;
    isLandscape?: boolean;
    secondImage?: string;
    useImageAsVideo?: boolean;
    isReversedAspectRatio?: boolean;
    // Additional detailed information
    technologies?: string[];
    features?: string[];
    challenges?: string[];
    results?: string[];
    duration?: string;
    teamSize?: string;
    role?: string;
    fullDescription?: string;
    gallery?: GalleryImage[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Autotracking Theodolite System for Upper-Air Observation using Pibal Integrated with Website-Based Automatic Data Logging (2025)',
        image: project1Image,
        video: project1VideoUrl,
        description: 'This project develops an automatic theodolite capable of tracking (autotracking) pilot balloons (pibals) in the atmosphere. The system integrates stepper motor control for azimuth and elevation with a computer vision–based detection method using a phone camera.',
        technologies: ['ESP32', 'Stepper Motors', 'Computer Vision', 'OpenCV', 'Python', 'React.js', 'Node.js', 'WebSocket'],
        features: [
            'Real-time pibal detection using computer vision',
            'Automatic theodolite tracking with stepper motor control',
            'Wireless data transmission via ESP32',
            'Web-based data visualization with charts and tables',
            'Automatic data logging and storage',
            'Historical data analysis capabilities'
        ],
        challenges: [
            'Requiring a high-resolution camera with reliable zoom capability for optimal balloon detection',
            'Ensuring no significant gap between the Android camera lens and the theodolite lens to maintain proper field of view alignment',
            'Implementing a dynamic HSV threshold range since balloon color can shift with altitude, focusing detection more on contrast than just color',
            'Applying dynamic stepper motor speed control to avoid overshoot during zoom in and when the balloon is near the frame center',
        ],

        results: [
            'Successfully designed and tested an automatic theodolite pibal tracking system with integrated web-based data logging',
            'Implemented hardware design using dual NEMA 17 stepper motors, TB600 drivers, ESP32, and 12V 10Ah power system',
            'Achieved image detection performance with 74.64% recall, 99.68% precision, and 86.65% F1-score',
            'Reduced azimuth tracking error to 1.24% and elevation error to 3.29% with hardware zooming',
            'Enabled balloon tracking up to 4250 feet altitude with web-based visualization including hodograph, observation tables, and wind barbs',
            'Provided downloadable observation data in PDF format via the website application',
        ],

        duration: '6 months',
        teamSize: 'Individual Project',
        role: 'Full-stack Software Developer & System Architect',
        gallery: [
            {
                id: 1,
                thumbnail: project1Image,
                fullSize: project1Image,
                caption: 'Complete Theodolite System Setup',
                description: 'The fully assembled autotracking theodolite system with stepper motors, ESP32 controller, and phone camera mount for pibal detection.'
            },
            {
                id: 2,
                thumbnail: project1Image1,
                fullSize: project1Image1,
                caption: 'Web-based Data Visualization Dashboard',
                description: 'Real-time web dashboard showing hodograph, observation tables, wind barbs, and downloadable PDF reports for meteorological data analysis.'
            },
            {
                id: 3,
                thumbnail: project1Image2,
                fullSize: project1Image2,
                caption: 'Software workflow',
                description: 'The object detection software system begins with image acquisition using an Android camera, which streams video to a Flask backend. The stream is accessed by an observer’s laptop within the same network, while a Python program detects the balloon pilot using OpenCV. The backend then forwards the processed video to a new address for website access and sends horizontal and vertical pixel distance data to the ESP32. The ESP32 uses this data to control stepper motor movement, calculates the total steps taken, and converts them into azimuth and elevation angles based on the number of steps per degree of the theodolite.'
            },
            {
                id: 4,
                thumbnail: project1Image3,
                fullSize: project1Image3,
                caption: 'Wiring Diagram',
                description: 'The figure above shows the wiring connections between the electronic components used in this study. The components include one ESP32 microcontroller, two TB6600 stepper motor drivers, two NEMA 17 17HS4401 stepper motors, one 3S 12V Li-Ion 18650 battery, one 12V power supply, one KY-023 analog joystick, one 1-phase MCB, one switch, one indicator LED, one 5V regulator, and one emergency button.'
            },
            {
                id: 5,
                thumbnail: project1Image4,
                fullSize: project1Image4,
                caption: 'View inside the control box',
                description: 'The control box consists of two TB6600 motor drivers, one 12V power supply, one ESP32 microcontroller, one ON/OFF button, one voltage and current indicator for the battery, and two stepper motor connectors to the TB6600 motor drivers.'
            },
            {
                id: 6,
                thumbnail: project1Image5,
                fullSize: project1Image5,
                caption: 'Image detection test results',
                description: 'The evaluation of the image detection system was carried out on 977 images, resulting in 312 True Positives, 558 True Negatives, 1 False Positive, and 106 False Negatives. Based on these results, the system achieved a Recall of 74.64%, a Precision of 99.68%, and an F1-Score of 86.65%, indicating that the system is highly precise in detecting balloons, though with some limitations in recall performance.'
            },
            {
                id: 7,
                thumbnail: project1Image6,
                fullSize: project1Image6,
                caption: '3D Design Control Box',
                description: 'The 3D design was created using SolidWorks, a computer-aided design (CAD) software widely used for mechanical modeling. SolidWorks was chosen for its capability to perform detailed simulations, ensuring that the design not only provides accurate visualization but also supports structural analysis and assembly testing before fabrication.'
            },
            {
                id: 8,
                thumbnail: project1Image8,
                fullSize: project1Image8,
                caption: '3D Design Stepper Mounting',
                description: 'The stepper motor mount was designed to rotate the azimuth and elevation screws of the theodolite. A shaft coupling was used to connect the stepper motor to the theodolite, specifically a flange coupling adapted with bolt and nut holes to fit the theodolite screws. To secure the stepper motor in place, a 3D-printed holder made of PLA filament was employed. The mount was designed to follow the circular shape of the screw arm, ensuring a strong and stable grip.'
            },
            {
                id: 9,
                thumbnail: project1Image7,
                fullSize: project1Image7,
                caption: 'Testing process',
                description: 'The stepper motor mount was designed to rotate the azimuth and elevation screws of the theodolite. A shaft coupling was used to connect the stepper motor to the theodolite, specifically a flange coupling adapted with bolt and nut holes to fit the theodolite screws. To secure the stepper motor in place, a 3D-printed holder made of PLA filament was employed. The mount was designed to follow the circular shape of the screw arm, ensuring a strong and stable grip.'
            }

        ]
    },
    {
        id: 2,
        title: 'AIR QUALITY MONITORING UAV (AQMU) FOR KONTES ROBOT TERBANG INDONESIA 2023',
        image: project2Image,
        video: project2VideoUrl,
        description: 'An unmanned aerial vehicle (UAV) with a mission to monitor air quality in areas that are difficult to reach, such as forest fires. This UAV is built with a fixed-wing aircraft configuration and uses a Pixhawk flight controller.',
        technologies: ['Pixhawk', 'MQ7 Sensor', 'ZH03B Sensor', 'React.js', 'JavaScript', 'ESP32'],
        features: [
            'Fixed-wing UAV configuration for extended flight time',
            'CO monitoring using MQ7 sensor',
            'PM2.5 monitoring using ZH03B sensor',
            'Real-time data transmission to ground station',
            'Web application for data monitoring',
            'Autonomous flight capabilities using Pixhawk Flight Controller',
            'GPS-based navigation system'

        ],
        challenges: [
            'Integrating multiple sensors while maintaining flight stability',
            'Ensuring reliable data transmission during flight',
            'Developing robust flight control algorithms'
        ],
        results: [
            'Successfully monitored air quality in remote forest areas',
            'Implemented real-time data streaming to web application',
        ],
        duration: '6 months',
        teamSize: '6 members',
        role: 'Lead Electronics & Software Developer',
        gallery: [
            {
                id: 1,
                thumbnail: project2Image5,
                fullSize: project2Image5,
                caption: 'AQMU Fixed-Wing UAV',
                description: 'Complete air quality monitoring UAV with integrated CO and PM2.5 sensors, designed for forest fire monitoring missions.'
            },
            {
                id: 2,
                thumbnail: project2Image1,
                fullSize: project2Image1,
                caption: 'Web-Based Data Visualization Dashboard',
                description: 'The data displayed on the website dashboard includes air quality parameters such as PM2.5, PM10, Carbon Monoxide (CO), Temperature, Relative Humidity (RH), and Altitude. The information is presented in both labels and graphs. Additionally, there is a visualization of aircraft movement using the U-Blox M8N GPS module.'
            },
            {
                id: 3,
                thumbnail: project2Image2,
                fullSize: project2Image2,
                caption: 'Team Member at Bun Yamin Air Force Base, Lampung',
                description: ''
            },
            {
                id: 4,
                thumbnail: project2Image3,
                fullSize: project2Image3,
                caption: 'Myself holding AQMU UAV',
                description: 'Captured moment holding the AQMU UAV before flight testing.'
            },
            {
                id: 5,
                thumbnail: project2Image4,
                fullSize: project2VideoUrl1,
                caption: 'AQMU Flight Demonstration Video',
                description: 'Flight demonstration of the Air Quality Monitoring UAV showing takeoff, data collection flight patterns, and real-time air quality monitoring capabilities.'
            },
            {
                id: 6,
                thumbnail: project2Image6,
                fullSize: project2Image6,
                caption: '3D design AQMU and sensors placement',
                description: 'The air quality sensor is placed inside the UAV body, specifically located in the front (head) section, and equipped with a tube that functions as the air intake channel.'
            },
        ]
    },
    {
        id: 3,
        title: 'Long Endurance Low Altitude UAV (LELA) FOR KONTES ROBOT TERBANG INDONESIA 2024',
        image: project3Image,
        video: project3VideoUrl,
        description: 'The Long Endurance Low Altitude UAV is an unmanned aerial vehicle designed to detect hotspots in a given area. This UAV uses a Speedy Bee F405 flight controller combined with a Raspberry Pi 3 mini PC for video image data processing using OpenCV. Video acquisition is carried out with a CCTV camera, which streams to the mini PC for hotspot detection using HSV thresholding. The UAV is also equipped with a payload dropping system operated by a servo motor mechanism. Once the UAV reaches a hotspot location, it will release the payload. This UAV is of the fixed-wing type with a 1.6 m wingspan and features a low-speed airfoil, intended to provide stable flight and ease of control.',
        isLandscape: true,
        technologies: ['SpeedyBee F405', 'Raspberry Pi 3', 'OpenCV', 'Python', 'Computer Vision', 'Servo Motors', 'CCTV Camera'],
        features: [
            'Fixed-wing configuration for long endurance flights',
            'Real-time video processing using OpenCV',
            'Hotspot detection and identification',
            'Automated payload drop mechanism',
            'Live video streaming to ground station',
            'GPS-based navigation system'
        ],
        challenges: [
            'Processing video in real-time on limited hardware',
            'Accurate hotspot detection in various lighting conditions',
            'Precise payload dropping at target locations',
            'Balancing payload weight with flight performance'
        ],
        results: [
            'Successfully detected and targeted hotspots',
            'Implemented automated payload release system'
        ],
        duration: '6 months',
        teamSize: '6 members',
        role: 'Electronics & Software Developer',
        gallery: [
            {
                id: 1,
                thumbnail: project3Image,
                fullSize: project3Image,
                caption: 'LELA UAV System',
                description: 'Long endurance UAV with SpeedyBee F405 flight controller and Raspberry Pi 3 for real-time video processing and hotspot detection.'
            },
            {
                id: 2,
                thumbnail: project3Image1,
                fullSize: project3Image1,
                caption: 'Wiring Diagram ',
                description: ''
            },
            {
                id: 3,
                thumbnail: project3Image2,
                fullSize: project3Image2,
                caption: 'The Long Endurance Low Altitude UAV (LELA) showcased at the STMKG BMKG Culture Festival',
                description: 'The Head of BMKG was having a discussion with us, the team members, regarding LELA. She appreciated LELA and suggested that it be further developed for Weather Modification Technology (TMC).'
            },
            {
                id: 4,
                thumbnail: project3Image3,
                fullSize: project3Image3,
                caption: 'Our full team during KRTI 2024',
                description: 'Kontes Robot Terbang Indonesia (KRTI) 2024 was held at the Faculty of Vocational Studies, Yogyakarta State University (UNY), in Gunungkidul, Special Region of Yogyakarta.'
            }
        ]
    },
    {
        id: 4,
        title: 'Air Quality Monitoring Device in Kalibaru Subdistrict, North Jakarta',
        image: project4Image,
        video: 'https://via.placeholder.com/640x360/2d3748/ffffff?text=Analytics+Demo',
        description: 'This device functions to provide air quality data information and is installed at the Kalibaru Subdistrict Office, North Jakarta. The observed parameters are PM2.5, measured using the GP2Y1010AU0F sensor, and Carbon Monoxide, measured using the MQ7 sensor. The PM2.5 and Carbon Monoxide data are then used to calculate the Air Pollution Standard Index (ISPU) and converted into environmental pollution levels based on the standards set by the Ministry of Environment. The air quality parameters and the meaning of the index are displayed on an LED matrix. This device uses an Arduino Mega microcontroller for sensor data acquisition, and its power source is AC 220V, which is converted into 12V DC using a power supply.',
        secondImage: project4Image2,
        useImageAsVideo: true,
        technologies: ['ESP32', 'GP2Y1010AU0F Sensor', 'MQ7 Sensor', 'LED Matrix Display', 'Arduino Mega'],
        features: [
            'Real-time CO and PM2.5 monitoring',
            'ISPU (Indeks Standar Pencemaran Udara) calculation and interpretation',
            'LED matrix display for public information',
            'Environmental compliance monitoring',
            'Public health alert system'
        ],
        challenges: [
            'Ensuring sensor accuracy in urban environment',
            'Implementing ISPU calculation algorithms',
            'Creating clear public display interface',
            'Maintaining device reliability in outdoor conditions'
        ],
        results: [
            'Successfully deployed in Kalibaru Subdistrict',
            'Provided real-time air quality data to local community',
            'Achieved 24/7 continuous monitoring',
            'Contributed to environmental awareness in the area'
        ],
        duration: '2 months',
        teamSize: '3 members',
        role: 'Lead Electroncs & Hardware programmer',
        gallery: [
            {
                id: 1,
                thumbnail: project4Image2,
                fullSize: project4Image2,
                caption: 'Air Quality Monitoring Device',
                description: 'Complete air quality monitoring system deployed in Kalibaru Subdistrict, featuring ESP32 controller and environmental sensors.'
            },
            {
                id: 2,
                thumbnail: project4Image,
                fullSize: project4Image,
                caption: 'LED Matrix Display System',
                description: 'Public information display showing real-time ISPU calculations and air quality status for community awareness.'
            },
            {
                id: 3,
                thumbnail: project4Image3,
                fullSize: project4Image3,
                caption: 'Hardware Testing',
                description: 'Testing process of the LED matrix function and its integration with the microcontroller.'
            },
            {
                id: 4,
                thumbnail: project4Image4,
                fullSize: project4Image4,
                caption: 'Introduction to the use of the equipment',
                description: 'Socialization on the use of the equipment with the community of Kalibaru Subdistrict, North Jakarta, was also accompanied by information on the importance of good air quality for the health of the Kalibaru residents.'
            }
        ]
    },
    {
        id: 5,
        title: 'Sumo Robot FOR TECHNOCORNER COMPETITION HELD BY UNIVERSITAS GAJAHMADA 2019',
        image: project5Image,
        video: project5VideoUrl,
        description: 'This sumo robot uses a 12V DC motor with a speed of 750 RPM as the main drive. To detect the presence of opponents, the robot is equipped with five digital proximity sensors placed around its body. In addition, an infrared sensor is installed at the bottom to detect the ring boundary line. As the control center, this robot uses a Teensy 3.5 microcontroller. The choice of Teensy 3.5 is based on its high processing capability and low latency, allowing it to respond quickly to changing conditions. This is crucial as the robot moves at high speed and requires real-time sensor data processing to generate accurate and efficient movement strategies.',
        isReversedAspectRatio: true,
        technologies: ['Teensy 3.5', 'Proximity Sensors', 'DC Motors', 'Motor Drivers','Infrared Sensor'],
        features: [
            'Autonomous opponent detection',
            'Strategic movement algorithms',
            'High-torque motor system',
            'Real-time sensor processing',
            'Competitive battle strategies'
        ],
        challenges: [
            'Implementing effective opponent detection algorithms',
            'Optimizing motor control for maximum pushing power',
            'Developing winning battle strategies'
        ],
        results: [
            'Successfully competed in Technocorner 2019',
            'Achieved consistent opponent detection',
            'Implemented effective pushing strategies',
            'Gained valuable experience in competitive robotics',
            'Won an honorable mention title'
        ],
        duration: '6 months',
        teamSize: '6 members',
        role: 'Programmer',
        gallery: [
            {
                id: 1,
                thumbnail: project5Image,
                fullSize: project5Image,
                caption: 'Team at Technocorner UGM 2019',
                description: 'The team is seen taking a photo at Technocorner UGM 2019, with me holding the sumo robot.'
            },
            {
                id: 2,
                thumbnail: project5Image1,
                fullSize: project5VideoUrl,
                caption: 'Sumo robot training process Demonstration Video',
                description: 'The sumo robot is placed in front of a box filled with shoes, and it can locate the shoes and attempt to push it.'
            },
            {
                id: 3,
                thumbnail: project5Image2,
                fullSize: project5Image2,
                caption: 'Proximity Sensors placement',
                description: 'There are five proximity sensors placed around the sumo robot, which serve to detect opponents from various directions within the ring.'
            }
          
        ]
    }
];