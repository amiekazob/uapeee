export interface Lab {
  id: string;
  name: string;
  description: string;
  category: 'Electronics' | 'Power' | 'Communications' | 'Control' | 'Computer' | 'Research';
  image: string;
  equipment: string[];
  applications: string[];
  capacity: number;
}

export const labs: Lab[] = [
  {
    id: 'electrical-circuit-lab-1',
    name: 'Electrical Circuits I Laboratory',
    description: 'This foundational laboratory course provides hands-on experience with fundamental electrical circuit principles, serving as the cornerstone of the UAP EEE curriculum. Students engage with basic circuit analysis, measurement techniques, and component characterization through carefully designed experiments that bridge theoretical knowledge with practical application.',
    category: 'Electronics',
    image: '/images/lab/electrical-circuit-1.jpg',
    equipment: [
      'Digital Multimeters (Fluke 87V)',
      'DC Power Supplies (0-30V, 0-3A)',
      'Function Generators (up to 10 MHz)',
      'Digital Oscilloscopes (100 MHz, 4-channel)',
      'Breadboards and Prototyping Kits',
      'Resistor, Capacitor, and Inductor Sets',
      'Variable Resistors and Potentiometers',
      'Signal Generators and Frequency Counters',
      'Component Testers and LCR Meters',
      'Circuit Simulation Software (PSpice, Multisim)'
    ],
    applications: [
      'Basic Circuit Analysis and Verification',
      'Ohm\'s Law and Power Calculations',
      'Series and Parallel Circuit Configurations',
      'Kirchhoff\'s Voltage and Current Laws',
      'Thevenin and Norton Equivalent Circuits',
      'AC Circuit Analysis with Phasors',
      'Frequency Response Measurements',
      'Filter Design and Implementation',
      'Resonance Phenomena in RLC Circuits',
      'Measurement Techniques and Instrumentation'
    ],
    capacity: 25
  },
  {
    id: 'electrical-circuit-lab-2',
    name: 'Electrical Circuits II Laboratory',
    description: 'Building upon the foundational concepts from Circuits I, this advanced laboratory course delves deeper into complex circuit analysis, AC circuits, and advanced measurement techniques. Students explore sophisticated circuit behaviors and develop proficiency with professional-grade instrumentation.',
    category: 'Electronics',
    image: '/images/lab/electrical-circuit-2.jpg',
    equipment: [
      'Advanced Digital Oscilloscopes (200 MHz)',
      'Precision Function Generators',
      'Network Analyzers',
      'Impedance Analyzers',
      'High-Precision Multimeters',
      'Variable AC/DC Power Supplies',
      'Signal Conditioning Modules',
      'Advanced Circuit Simulation Software',
      'Precision Component Sets',
      'Professional Breadboarding Systems'
    ],
    applications: [
      'Complex Impedance Analysis',
      'Three-Phase Power Systems',
      'Transformer Characteristics',
      'Motor Control Circuits',
      'Power Factor Correction',
      'Harmonic Analysis',
      'Advanced Filter Design',
      'Resonant Circuit Applications',
      'Power Electronics Fundamentals',
      'Industrial Circuit Applications'
    ],
    capacity: 25
  },
  {
    id: 'electronics-lab-1',
    name: 'Electronics I Laboratory',
    description: 'This laboratory introduces students to the fascinating world of electronic devices and circuits. Through hands-on experiments with diodes, transistors, and operational amplifiers, students gain practical understanding of semiconductor physics and analog circuit design principles.',
    category: 'Electronics',
    image: '/images/lab/electronic-circuit-1.jpg',
    equipment: [
      'Semiconductor Parameter Analyzers',
      'Curve Tracers for Diodes and Transistors',
      'High-Frequency Oscilloscopes',
      'Precision DC Sources',
      'Function Generators with Arbitrary Waveforms',
      'Spectrum Analyzers',
      'Component Libraries (Diodes, BJTs, FETs)',
      'Operational Amplifier Sets',
      'Electronic Design Automation Software',
      'PCB Prototyping Equipment'
    ],
    applications: [
      'Diode Characteristics and Applications',
      'Bipolar Junction Transistor Analysis',
      'Field Effect Transistor Operations',
      'Operational Amplifier Circuits',
      'Amplifier Design and Analysis',
      'Oscillator Circuits',
      'Voltage Regulators',
      'Active Filter Implementation',
      'Signal Processing Circuits',
      'Electronic System Design'
    ],
   capacity: 25
  },
  {
    id: 'electronics-lab-2',
    name: 'Electronics II Laboratory',
    description: 'Advanced electronics laboratory focusing on complex analog and digital circuit design, integrated circuits, and system-level applications. Students work with cutting-edge electronic components and design methodologies used in modern electronic systems.',
    category: 'Electronics',
    image: '/images/lab/electronic-circuit-2.jpg',
    equipment: [
      'Mixed-Signal Oscilloscopes',
      'Logic Analyzers',
      'IC Testers and Programmers',
      'High-Speed Digital Trainers',
      'FPGA Development Boards',
      'Microcontroller Programming Kits',
      'Advanced Simulation Software',
      'PCB Design and Fabrication Tools',
      'Surface Mount Technology Equipment',
      'Environmental Testing Chambers'
    ],
    applications: [
      'Digital Logic Design',
      'Microprocessor Interfacing',
      'Analog-to-Digital Conversion',
      'Digital Signal Processing',
      'Communication Circuits',
      'Power Management Systems',
      'Embedded System Design',
      'VLSI Circuit Applications',
      'System Integration Projects',
      'Advanced Electronic Prototyping'
    ],
   capacity: 25
  },
  {
    id: 'computer-programming-lab',
    name: 'Computer Programming Laboratory',
    description: 'A comprehensive programming laboratory designed to develop strong computational thinking and programming skills essential for modern electrical engineers. Students learn multiple programming languages and software tools used in engineering applications.',
    category: 'Computer',
    image: '/images/lab/computer-programming-lab.jpg',
    equipment: [
      'High-Performance Workstations',
      'Multi-Monitor Setup Systems',
      'Development Environment Software',
      'Compiler and Debugger Tools',
      'Version Control Systems',
      'Cloud Computing Access',
      'Programming Language Libraries',
      'Database Management Systems',
      'Web Development Frameworks',
      'Mobile App Development Tools'
    ],
    applications: [
      'C/C++ Programming Fundamentals',
      'Object-Oriented Programming',
      'Data Structures and Algorithms',
      'MATLAB/Simulink Applications',
      'Python for Engineering',
      'Database Design and Management',
      'Web Application Development',
      'Mobile App Programming',
      'Software Engineering Practices',
      'Engineering Problem Solving'
    ],
   capacity: 25
  },
  {
    id: 'digital-logic-design-lab',
    name: 'Digital Logic Design Laboratory',
    description: 'This laboratory provides hands-on experience with digital systems design, from basic logic gates to complex sequential circuits. Students learn to design, implement, and test digital systems using both traditional and modern design methodologies.',
    category: 'Computer',
    image: '/images/lab/digital-electronics-lab.jpg',
    equipment: [
      'Digital Logic Trainers',
      'FPGA Development Kits',
      'Logic Analyzers',
      'Digital Oscilloscopes',
      'Function Generators',
      'Digital Multimeters',
      'Breadboarding Systems',
      'IC Component Libraries',
      'HDL Simulation Software',
      'Digital Design CAD Tools'
    ],
    applications: [
      'Boolean Algebra Implementation',
      'Combinational Logic Design',
      'Sequential Circuit Analysis',
      'Counter and Register Design',
      'Memory System Implementation',
      'Finite State Machine Design',
      'VHDL/Verilog Programming',
      'FPGA-based System Design',
      'Digital System Testing',
      'Computer Architecture Fundamentals'
    ],
    capacity: 25
  },
  {
    id: 'microprocessor-lab',
    name: 'Microprocessor and Microcontroller Laboratory',
    description: 'An advanced laboratory focusing on microprocessor and microcontroller systems, embedded programming, and interfacing techniques. Students develop skills in low-level programming and hardware-software integration essential for embedded systems.',
    category: 'Computer',
    image: '/images/lab/matlab-lab.jpg',
    equipment: [
      'Microprocessor Training Kits',
      'Microcontroller Development Boards',
      'In-Circuit Emulators',
      'Logic Analyzers',
      'Digital Storage Oscilloscopes',
      'Embedded System Debuggers',
      'Interface Modules and Sensors',
      'Motor Control Systems',
      'Communication Protocol Analyzers',
      'Real-Time Operating System Tools'
    ],
    applications: [
      'Assembly Language Programming',
      'Microcontroller Interfacing',
      'Interrupt Handling Systems',
      'Timer and Counter Applications',
      'Serial Communication Protocols',
      'Analog-to-Digital Conversion',
      'Motor Control Applications',
      'Sensor Integration Projects',
      'Embedded System Design',
      'Real-Time System Development'
    ],
    capacity: 25
  },
  {
    id: 'communication-systems-lab',
    name: 'Communication Systems Laboratory',
    description: 'This laboratory provides comprehensive training in modern communication systems, covering analog and digital communication techniques, modulation schemes, and signal processing applications used in telecommunications and wireless systems.',
    category: 'Communications',
    image: '/images/lab/communication-engineeting-lab.jpg',
    equipment: [
      'Communication System Trainers',
      'Signal Generators and Analyzers',
      'Spectrum Analyzers',
      'Network Analyzers',
      'Modulation/Demodulation Kits',
      'Antenna Measurement Systems',
      'Software Defined Radio Platforms',
      'Fiber Optic Communication Kits',
      'Wireless Communication Modules',
      'Digital Signal Processing Boards'
    ],
    applications: [
      'Amplitude and Frequency Modulation',
      'Digital Modulation Techniques',
      'Error Detection and Correction',
      'Channel Coding Applications',
      'Antenna Design and Testing',
      'Wireless Communication Systems',
      'Fiber Optic Communications',
      'Satellite Communication Systems',
      'Mobile Communication Protocols',
      'Software Defined Radio Programming'
    ],
    capacity: 25
  },
  {
    id: 'signal-processing-lab',
    name: 'Digital Signal Processing Laboratory',
    description: 'Advanced laboratory focusing on digital signal processing techniques, algorithms, and applications. Students work with real-time signal processing systems and develop skills in analyzing and manipulating digital signals for various engineering applications.',
    category: 'Communications',
    image: '/images/lab/matlab-lab.jpg',
    equipment: [
      'DSP Development Boards',
      'Real-Time Signal Processors',
      'High-Speed Data Acquisition Systems',
      'Digital Filter Design Software',
      'Audio Processing Equipment',
      'Image Processing Workstations',
      'MATLAB/Simulink Licenses',
      'LabVIEW Development Environment',
      'Spectrum Analyzers',
      'Function Generators with Arbitrary Waveforms'
    ],
    applications: [
      'Digital Filter Design and Implementation',
      'Fast Fourier Transform Applications',
      'Audio Signal Processing',
      'Image and Video Processing',
      'Adaptive Signal Processing',
      'Multirate Signal Processing',
      'Wavelet Transform Applications',
      'Real-Time DSP Implementation',
      'Speech Recognition Systems',
      'Biomedical Signal Analysis'
    ],
    capacity: 25
  },
  {
    id: 'numerical-methods-lab',
    name: 'Numerical Methods Laboratory',
    description: 'This laboratory focuses on computational methods and numerical techniques essential for solving complex engineering problems. Students learn to implement and apply numerical algorithms using various software tools and programming environments.',
    category: 'Computer',
    image: '/images/lab/matlab-lab.jpg',
    equipment: [
      'High-Performance Computing Workstations',
      'MATLAB/Simulink Software Suite',
      'Mathematica and Maple Licenses',
      'Python Scientific Computing Libraries',
      'Parallel Computing Clusters',
      'Numerical Analysis Software',
      'Statistical Analysis Tools',
      'Optimization Software Packages',
      'Finite Element Analysis Tools',
      'Cloud Computing Resources'
    ],
    applications: [
      'Root Finding and Equation Solving',
      'Numerical Integration and Differentiation',
      'Linear and Nonlinear System Solutions',
      'Interpolation and Curve Fitting',
      'Optimization Techniques',
      'Differential Equation Solutions',
      'Statistical Data Analysis',
      'Monte Carlo Simulations',
      'Finite Element Method Applications',
      'Engineering Problem Modeling'
    ],
    capacity: 25
  },
  {
    id: 'embedded-systems-lab',
    name: 'Embedded Systems Laboratory',
    description: 'Advanced laboratory dedicated to embedded systems design and development. Students work on real-world embedded projects, learning to integrate hardware and software components for various applications in automotive, industrial, and consumer electronics.',
    category: 'Computer',
    image: '/images/lab/digital-electronics-lab.jpg',
    equipment: [
      'ARM Cortex Development Boards',
      'Arduino and Raspberry Pi Kits',
      'Real-Time Operating System Tools',
      'Embedded Debuggers and Emulators',
      'Sensor and Actuator Modules',
      'Communication Interface Modules',
      'Power Management Systems',
      'PCB Design and Prototyping Tools',
      'Environmental Testing Equipment',
      'IoT Development Platforms'
    ],
    applications: [
      'Real-Time System Design',
      'IoT Device Development',
      'Automotive Electronics Projects',
      'Industrial Automation Systems',
      'Wearable Technology Development',
      'Smart Home Applications',
      'Robotics Control Systems',
      'Wireless Sensor Networks',
      'Edge Computing Applications',
      'Embedded AI Implementation'
    ],
    capacity: 25
  },
  {
    id: 'power-electronics-lab',
    name: 'Power Electronics Laboratory',
    description: 'Specialized laboratory for power electronics and energy conversion systems. Students gain hands-on experience with power semiconductor devices, converter circuits, and motor drive systems used in industrial and renewable energy applications.',
    category: 'Power',
    image: '/images/lab/power-electronics-lab.jpg',
    equipment: [
      'Power Electronics Training Systems',
      'High-Voltage Power Supplies',
      'Power Semiconductor Devices',
      'Motor Drive Systems',
      'Power Quality Analyzers',
      'Harmonic Analyzers',
      'Isolation Transformers',
      'Current and Voltage Probes',
      'Thermal Imaging Cameras',
      'Safety Equipment and Interlocks'
    ],
    applications: [
      'DC-DC Converter Design',
      'AC-DC Rectifier Circuits',
      'Inverter Design and Control',
      'Motor Speed Control Systems',
      'Power Factor Correction',
      'Renewable Energy Systems',
      'Uninterruptible Power Supplies',
      'Electric Vehicle Charging Systems',
      'Grid-Tied Inverter Systems',
      'Energy Storage Applications'
    ],
    capacity: 25
  },
  {
    id: 'biomedical-engineering-lab',
    name: 'Biomedical Engineering Laboratory',
    description: 'Interdisciplinary laboratory combining electrical engineering principles with medical applications. Students work on biomedical instrumentation, signal processing for healthcare, and medical device development projects.',
    category: 'Research',
    image: '/images/lab/bio-medical.jpg',
    equipment: [
      'Biomedical Signal Acquisition Systems',
      'ECG and EEG Monitoring Equipment',
      'Ultrasound Imaging Systems',
      'Medical Device Prototyping Tools',
      'Physiological Simulators',
      'Biocompatible Materials Testing',
      'Medical Image Processing Software',
      'Patient Safety Testing Equipment',
      'Regulatory Compliance Tools',
      'Clinical Data Analysis Software'
    ],
    applications: [
      'ECG Signal Analysis and Processing',
      'EEG Brain Signal Monitoring',
      'Medical Imaging System Design',
      'Prosthetic Device Development',
      'Telemedicine System Implementation',
      'Wearable Health Monitoring Devices',
      'Medical Sensor Design',
      'Rehabilitation Engineering Projects',
      'Biomedical Data Analysis',
      'Healthcare Technology Innovation'
    ],
    capacity: 25
  }
];