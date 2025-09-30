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
import project2VideoUrl from '../assets/projects/project2-video.mp4?url';
import project3Image from '../assets/projects/project3-image.jpeg';
import project3VideoUrl from '../assets/projects/project3-video.mp4?url';
import project4Image from '../assets/projects/project4-image.jpeg';
import project4Image2 from '../assets/projects/project4-image2.jpeg';
import project5Image from '../assets/projects/project5-image.jpeg';
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
        technologies: ['Pixhawk', 'MQ7 Sensor', 'ZH03B Sensor', 'React.js', 'JavaScript', 'Arduino', 'C++', 'WiFi Communication'],
        features: [
            'Fixed-wing UAV configuration for extended flight time',
            'CO monitoring using MQ7 sensor',
            'PM2.5 monitoring using ZH03B sensor',
            'Real-time data transmission to ground station',
            'Web application for data monitoring',
            'Autonomous flight capabilities'
        ],
        challenges: [
            'Integrating multiple sensors while maintaining flight stability',
            'Ensuring reliable data transmission during flight',
            'Optimizing power consumption for extended missions',
            'Developing robust flight control algorithms'
        ],
        results: [
            'Successfully monitored air quality in remote forest areas',
            'Achieved 2+ hours flight endurance',
            'Implemented real-time data streaming to web application',
            'Won recognition at KRTI 2023 competition'
        ],
        duration: '8 months',
        teamSize: '5 members',
        role: 'Electronics & Software Developer',
        gallery: [
            {
                id: 1,
                thumbnail: project2Image,
                fullSize: project2Image,
                caption: 'AQMU Fixed-Wing UAV',
                description: 'Complete air quality monitoring UAV with integrated CO and PM2.5 sensors, designed for forest fire monitoring missions.'
            },
            {
                id: 2,
                thumbnail: 'https://via.placeholder.com/300x200/374151/ffffff?text=Sensor+Array',
                fullSize: 'https://via.placeholder.com/1200x800/374151/ffffff?text=Sensor+Array+Full',
                caption: 'Air Quality Sensor Integration',
                description: 'MQ7 CO sensor and ZH03B PM2.5 sensor integrated with Pixhawk flight controller for real-time air quality monitoring.'
            },
            {
                id: 3,
                thumbnail: 'https://via.placeholder.com/300x200/374151/ffffff?text=Flight+Test',
                fullSize: 'https://via.placeholder.com/1200x800/374151/ffffff?text=Flight+Test+Full',
                caption: 'Field Testing Operations',
                description: 'UAV conducting air quality monitoring flight tests in forest areas, demonstrating 2+ hours flight endurance capability.'
            }
        ]
    },
    {
        id: 3,
        title: 'Long Endurance Low Altitude UAV (LELA) FOR KONTES ROBOT TERBANG INDONESIA 2024',
        image: project3Image,
        video: project3VideoUrl,
        description: 'An unmanned aerial vehicle (UAV) built with a fixed-wing configuration, using a SpeedyBee F405 flight controller and a Raspberry Pi 3 mini PC for OpenCV video image processing.',
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
            'Successfully detected and targeted hotspots with 90% accuracy',
            'Achieved 3+ hours flight endurance',
            'Implemented automated payload release system',
            'Secured top position at KRTI 2024 competition'
        ],
        duration: '10 months',
        teamSize: '6 members',
        role: 'Computer Vision & Flight Systems Developer',
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
                thumbnail: 'https://via.placeholder.com/300x200/374151/ffffff?text=Computer+Vision',
                fullSize: 'https://via.placeholder.com/1200x800/374151/ffffff?text=Computer+Vision+Full',
                caption: 'OpenCV Hotspot Detection',
                description: 'Real-time computer vision processing using OpenCV on Raspberry Pi 3, achieving 90% accuracy in hotspot detection and identification.'
            },
            {
                id: 3,
                thumbnail: 'https://via.placeholder.com/300x200/374151/ffffff?text=Payload+System',
                fullSize: 'https://via.placeholder.com/1200x800/374151/ffffff?text=Payload+System+Full',
                caption: 'Automated Payload Drop Mechanism',
                description: 'Servo-controlled payload release system for precise dropping at detected hotspot locations during autonomous flight missions.'
            }
        ]
    },
    {
        id: 4,
        title: 'Air Quality Monitoring Device in Kalibaru Subdistrict, North Jakarta',
        image: project4Image,
        video: 'https://via.placeholder.com/640x360/2d3748/ffffff?text=Analytics+Demo',
        description: 'This device is used to monitor air quality, implemented in Kalibaru Subdistrict, North Jakarta, in 2024. The observed parameters include CO and PM2.5, with data converted into Air Pollution Standard Index (ISPU).',
        secondImage: project4Image2,
        useImageAsVideo: true,
        technologies: ['ESP32', 'GP2Y1010AU0F Sensor', 'MQ7 Sensor', 'LED Matrix Display', 'WiFi', 'Arduino IDE'],
        features: [
            'Real-time CO and PM2.5 monitoring',
            'ISPU calculation and interpretation',
            'LED matrix display for public information',
            'Wireless data transmission',
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
        duration: '4 months',
        teamSize: '3 members',
        role: 'Lead Developer & System Designer',
        gallery: [
            {
                id: 1,
                thumbnail: project4Image,
                fullSize: project4Image,
                caption: 'Air Quality Monitoring Device',
                description: 'Complete air quality monitoring system deployed in Kalibaru Subdistrict, featuring ESP32 controller and environmental sensors.'
            },
            {
                id: 2,
                thumbnail: project4Image2,
                fullSize: project4Image2,
                caption: 'LED Matrix Display System',
                description: 'Public information display showing real-time ISPU calculations and air quality status for community awareness.'
            },
            {
                id: 3,
                thumbnail: 'https://via.placeholder.com/300x200/374151/ffffff?text=Sensor+Setup',
                fullSize: 'https://via.placeholder.com/1200x800/374151/ffffff?text=Sensor+Setup+Full',
                caption: 'Sensor Configuration',
                description: 'GP2Y1010AU0F PM2.5 sensor and MQ7 CO sensor setup with ESP32 for continuous 24/7 environmental monitoring.'
            }
        ]
    },
    {
        id: 5,
        title: 'Sumo Robot FOR TECHNOCORNER COMPETITION HELD BY UNIVERSITAS GAJAHMADA 2019',
        image: project5Image,
        video: project5VideoUrl,
        description: 'A competitive sumo robot designed for autonomous battles. Built with advanced sensors and motor control systems, this robot can detect opponents and execute strategic movements to push them out of the ring.',
        isReversedAspectRatio: true,
        technologies: ['Arduino', 'Ultrasonic Sensors', 'Gyroscope', 'DC Motors', 'Motor Drivers', 'C++', 'PID Control'],
        features: [
            'Autonomous opponent detection',
            'Strategic movement algorithms',
            'Balance control system',
            'High-torque motor system',
            'Real-time sensor processing',
            'Competitive battle strategies'
        ],
        challenges: [
            'Implementing effective opponent detection algorithms',
            'Maintaining balance during aggressive maneuvers',
            'Optimizing motor control for maximum pushing power',
            'Developing winning battle strategies'
        ],
        results: [
            'Successfully competed in Technocorner 2019',
            'Achieved consistent opponent detection',
            'Implemented effective pushing strategies',
            'Gained valuable experience in competitive robotics'
        ],
        duration: '3 months',
        teamSize: '4 members',
        role: 'Programming & Control Systems Developer',
        gallery: [
            {
                id: 1,
                thumbnail: project5Image,
                fullSize: project5Image,
                caption: 'Sumo Robot Competition Ready',
                description: 'Autonomous sumo robot designed for Technocorner 2019 competition with advanced sensor systems and strategic movement algorithms.'
            },
            {
                id: 2,
                thumbnail: 'https://via.placeholder.com/300x200/374151/ffffff?text=Sensor+Array',
                fullSize: 'https://via.placeholder.com/1200x800/374151/ffffff?text=Sensor+Array+Full',
                caption: 'Sensor and Control Systems',
                description: 'Ultrasonic sensors, gyroscope, and high-torque DC motors with PID control for precise opponent detection and movement.'
            },
            {
                id: 3,
                thumbnail: 'https://via.placeholder.com/300x200/374151/ffffff?text=Competition',
                fullSize: 'https://via.placeholder.com/1200x800/374151/ffffff?text=Competition+Full',
                caption: 'Competition Performance',
                description: 'Robot demonstrating autonomous battle capabilities and strategic pushing maneuvers during Technocorner 2019 competition.'
            }
        ]
    }
];