/* Doilwell course catalogue and access control.
   - Set paystackKey to your Paystack PUBLIC key to take real payments (until then the payment page runs in demo mode).
   - Course outlines are blank for now: fill a course's desc and lessons ([{ t: 'Lesson title', src: 'video URL' }]).
     A lesson's src plays once the course is unlocked. */
window.DOILWELL = {
  currency: 'USD',
  paystackKey: 'pk_test_REPLACE_WITH_YOUR_PAYSTACK_PUBLIC_KEY',
  courses: {
 "ct-workover": {
  "title": "Advanced Coiled Tubing and Hydraulic Workover Operations",
  "price": 200,
  "category": "Coiled Tubing & Well Intervention",
  "img": "https://res.cloudinary.com/dhaufyadl/image/upload/v1794167043/IMG-20261108-WA0013_epxvez.jpg",
  "desc": "6 Advanced Professional Modules \u2013 Hands-On Practical, Engineering Design, Modelling and Industry-Focused Training",
  "tags": [
   "6 Modules"
  ],
  "lessons": [
   {
    "t": "Advanced Coiled Tubing Operations, Well Intervention and Completion Applications",
    "src": ""
   },
   {
    "t": "Coiled Tubing Engineering, Job Design and Force Analysis",
    "src": ""
   },
   {
    "t": "Coiled Tubing Modelling, Software Simulation and Specialized Operations",
    "src": ""
   },
   {
    "t": "Hydraulic Workover, Snubbing and Well Control Operations",
    "src": ""
   },
   {
    "t": "Industry-Focused Case Studies and Field Applications",
    "src": ""
   },
   {
    "t": "Technical Troubleshooting, Failure Analysis and Engineering Solutions",
    "src": ""
   }
  ],
  "modules": [
   {
    "title": "Module 1: Advanced Coiled Tubing Operations, Well Intervention and Completion Applications",
    "topics": [
     "Coiled Tubing Intervention Strategies and Job Execution",
     "Live-Well Intervention and Rigless Well Operations",
     "Coiled Tubing Deployment in High-Pressure and High-Temperature Wells",
     "CT Milling, Drilling and Fishing Operations",
     "Coiled Tubing Cleanout and Sand/Scale Removal Operations",
     "Nitrogen-Lift and Gas-Lift Applications",
     "Coiled Tubing Stimulation and Matrix Acidizing Operations",
     "Selective Zone Treatment and Multistage Intervention",
     "Through-Tubing Perforating and Completion Intervention",
     "Advanced CT Conveyance of Downhole Tools and BHA Systems",
     "Extended-Reach and Horizontal Well Intervention",
     "CT Operational Risk Assessment and Execution Planning"
    ]
   },
   {
    "title": "Module 2: Coiled Tubing Engineering, Job Design and Force Analysis",
    "topics": [
     "Coiled Tubing String Design and Material Selection",
     "CT String Fatigue Modelling and Life-Cycle Assessment",
     "CT Stress Analysis and Combined Loading Evaluation",
     "Buckling Analysis: Sinusoidal and Helical Buckling",
     "CT Lock-Up and Reach-Limit Analysis",
     "Drag, Friction and Force Prediction Modelling",
     "CT Injector Force and Weight Transfer Analysis",
     "CT Pipe Movement and Downhole Force Modelling",
     "CT Hydraulic and Circulation System Design",
     "CT BHA Selection and Mechanical Design",
     "Well Trajectory and Completion Geometry Assessment",
     "Advanced CT Job Simulation and Engineering Design Validation"
    ]
   },
   {
    "title": "Module 3: Coiled Tubing Modelling, Software Simulation and Specialized Operations",
    "topics": [
     "Coiled Tubing Job Modelling and Simulation",
     "CT String Fatigue and Running-Life Prediction Software",
     "CT Force, Stress and Buckling Simulation",
     "CT Reach, Lock-Up and Depth Prediction Modelling",
     "Hydraulic Modelling and Circulation Pressure Prediction",
     "Nitrogen Injection and Multiphase Flow Modelling",
     "CT Cleanout and Solids Transport Simulation",
     "CT Milling and Drilling Performance Modelling",
     "CT Stimulation and Acid Placement Simulation",
     "PROSPER-Based Well Performance and CT Intervention Modelling",
     "Integrated Wellbore Hydraulics and Downhole Pressure Analysis",
     "Sensitivity Analysis, Design Optimization and Simulation Validation",
     "Advanced CT Operations in Deviated and Horizontal Wells",
     "Integrated CT Job Programme and Engineering Design Report"
    ]
   },
   {
    "title": "Module 4: Hydraulic Workover, Snubbing and Well Control Operations",
    "topics": [
     "Hydraulic Workover Unit and Operational Configuration",
     "Snubbing and Hydraulic Pipe Manipulation Under Pressure",
     "Live-Well Tubing and Completion Installation/Recovery",
     "Hydraulic Workover Force, Load and Capacity Calculations",
     "Pipe Buckling, Compression and Tension Analysis During Snubbing",
     "Well Control Engineering for Hydraulic Workover Operations",
     "Pressure Control Equipment Configuration and Integrity Testing",
     "Stripper, BOP and Annular Control System Operations",
     "Snubbing Basket, Slips and Hydraulic Jack System Operation",
     "Advanced Well Kill, Circulation and Fluid Displacement Design",
     "Hydraulic Workover in High-Pressure and High-Temperature Wells",
     "Combined CT and Hydraulic Workover Intervention Strategies",
     "HWO Job Design, Execution Programme and Operational Risk Assessment"
    ]
   },
   {
    "title": "Module 5: Industry-Focused Case Studies and Field Applications",
    "topics": [
     "Coiled Tubing Intervention in High-Pressure Producing Wells",
     "CT Cleanout and Sand Removal in Deviated and Horizontal Wells",
     "Nitrogen-Assisted Well Unloading and Production Restoration",
     "CT Milling and Fishing in Complex Wellbore Conditions",
     "CT Stimulation and Acidizing in Mature Oil and Gas Wells",
     "CT Lock-Up and Reach-Limit Challenges in Extended-Reach Wells",
     "CT Fatigue-Related Failure and String Failure Investigation",
     "Hydraulic Workover Tubing Recovery Under Live-Well Conditions",
     "Snubbing Operations in High-Pressure Gas Wells",
     "Hydraulic Workover Completion Installation and Replacement",
     "Combined CT and HWO Well Intervention Case Studies",
     "Review of Actual or Simulated Field Job Programmes and Operational Reports"
    ]
   },
   {
    "title": "Module 6: Technical Troubleshooting, Failure Analysis and Engineering Solutions",
    "topics": [
     "CT String Fatigue, Cracking and Premature Failure Diagnosis",
     "CT Buckling, Helical Lock-Up and Reach-Limit Troubleshooting",
     "Injector Slip, Chain and Gripper System Performance Problems",
     "CT Reel, Gooseneck and Guide Arch Mechanical Fault Diagnosis",
     "CT Pressure Control and BOP Leakage Investigation",
     "CT Hydraulic System Pressure and Flow Irregularities",
     "Downhole Tool, Motor and BHA Operational Failures",
     "CT Milling, Drilling and Cleanout Performance Problems",
     "Nitrogen Injection, Gas-Liquid Flow and Circulation Problems",
     "HWO Hydraulic Jack, Slips and Pipe Handling System Failures",
     "Snubbing Force Imbalance and Pipe Movement Problems",
     "Well Control Complications and Pressure Control Equipment Failures",
     "Root Cause Failure Analysis and Corrective Engineering Solutions",
     "Development of Field Troubleshooting Procedures and Contingency Plans",
     "Integrated CT/HWO Technical Problem-Solving Exercises and Competency Assessment"
    ]
   }
  ]
 },
 "ct-software": {
  "title": "Coiled Tubing Operations and Design Using Industry Software",
  "price": 200,
  "category": "Coiled Tubing & Well Intervention",
  "img": "https://res.cloudinary.com/dhaufyadl/image/upload/q_auto/f_auto/v1776523043/What-is-Coiled-Tubing_tlr7qo.webp",
  "desc": "",
  "tags": [],
  "lessons": []
 },
 "slickline": {
  "title": "Advanced Slickline Operations and Bottom Hole Assembly",
  "price": 250,
  "category": "Coiled Tubing & Well Intervention",
  "img": "https://res.cloudinary.com/dhaufyadl/image/upload/q_auto/f_auto/v1776523369/images_31_xr6xgo.jpg",
  "desc": "",
  "tags": [],
  "lessons": []
 },
 "wellhead-xmas": {
  "title": "Wellhead & X-Mas Tree Installation & Maintenance",
  "price": 200,
  "category": "Wellhead Systems & Pressure Control",
  "img": "https://res.cloudinary.com/dhaufyadl/image/upload/q_auto/f_auto/v1776524806/images_48_f7q6vd.jpg",
  "desc": "",
  "tags": [],
  "lessons": []
 },
 "wellhead-pressure": {
  "title": "Wellhead Operations & Pressure Control System",
  "price": 220,
  "category": "Wellhead Systems & Pressure Control",
  "img": "https://res.cloudinary.com/dhaufyadl/image/upload/q_auto/f_auto/v1776524597/Wellhead_Bohrlochkopf_qgkmdv.jpg",
  "desc": "",
  "tags": [],
  "lessons": []
 },
 "well-eng-design": {
  "title": "Well Engineering and Design",
  "price": 150,
  "category": "Wellhead Systems & Pressure Control",
  "img": "https://res.cloudinary.com/dhaufyadl/image/upload/q_auto/f_auto/v1776524641/images_47_ombcey.jpg",
  "desc": "",
  "tags": [],
  "lessons": []
 },
 "well-test": {
  "title": "Advanced Well Test Operations",
  "price": 210,
  "category": "Well Testing, Production & Reservoir Management",
  "img": "https://res.cloudinary.com/dhaufyadl/image/upload/q_auto/f_auto/v1776530393/images_49_sjrw5b.jpg",
  "desc": "",
  "tags": [],
  "lessons": []
 },
 "well-performance": {
  "title": "Well Performance and Flow Analysis",
  "price": 150,
  "category": "Well Testing, Production & Reservoir Management",
  "img": "https://res.cloudinary.com/dhaufyadl/image/upload/q_auto/f_auto/v1776530430/images_51_ybhqfx.jpg",
  "desc": "",
  "tags": [],
  "lessons": []
 },
 "well-surveillance": {
  "title": "Advanced Well and Reservoir Surveillance",
  "price": 210,
  "category": "Well Testing, Production & Reservoir Management",
  "img": "https://res.cloudinary.com/dhaufyadl/image/upload/q_auto/f_auto/v1776897155/images_52_jatqy2.jpg",
  "desc": "",
  "tags": [],
  "lessons": []
 },
 "petroleum-diploma": {
  "title": "Professional Diploma in Petroleum Production and Reservoir Management",
  "price": 350,
  "category": "Well Testing, Production & Reservoir Management",
  "img": "https://res.cloudinary.com/dhaufyadl/image/upload/q_auto/f_auto/v1776530217/1757307086219_wc6joy.jpg",
  "desc": "",
  "tags": [],
  "lessons": []
 },
 "machinery-balancing": {
  "title": "Advanced Machinery Balancing",
  "price": 230,
  "category": "Rotating Equipment & Mechanical Integrity",
  "img": "https://res.cloudinary.com/dhaufyadl/image/upload/v1794167202/IMG-20261108-WA0011_uamcvf.jpg",
  "desc": "12 Advanced Professional Modules \u2013 Industry-Focused and Hands-On Practical Training",
  "tags": [
   "12 Modules"
  ],
  "lessons": [
   {
    "t": "Advanced Rotor Dynamics and Unbalance Analysis",
    "src": ""
   },
   {
    "t": "Advanced Vibration and Phase Analysis for Machinery Balancing",
    "src": ""
   },
   {
    "t": "International Balancing Standards and Rotor Acceptance Criteria",
    "src": ""
   },
   {
    "t": "Advanced Static and Single-Plane Dynamic Balancing",
    "src": ""
   },
   {
    "t": "Advanced Two-Plane Dynamic Balancing",
    "src": ""
   },
   {
    "t": "Advanced Multi-Plane and Flexible Rotor Balancing",
    "src": ""
   },
   {
    "t": "Advanced In-Situ Field Balancing of Industrial Machinery",
    "src": ""
   },
   {
    "t": "High-Speed and Equipment-Specific Rotor Balancing",
    "src": ""
   },
   {
    "t": "Advanced Balancing Instrumentation, Software and Data Analysis",
    "src": ""
   },
   {
    "t": "Advanced Balancing Calculations and Engineering Modelling",
    "src": ""
   },
   {
    "t": "Advanced Balancing Fault Diagnosis, Troubleshooting and Root Cause Analysis",
    "src": ""
   },
   {
    "t": "Advanced Industrial Balancing Workshop, Case Studies and Competency Assessment",
    "src": ""
   }
  ],
  "modules": [
   {
    "title": "Module 1: Advanced Rotor Dynamics and Unbalance Analysis",
    "topics": [
     "Advanced Rotor Dynamic Behaviour and Stability Analysis",
     "Static, Couple, Dynamic and Quasi-Static Unbalance Analysis",
     "Rigid and Flexible Rotor Unbalance Assessment",
     "Rotor Whirl, Whip and Shaft Deflection Analysis",
     "Critical Speed and Natural Frequency Analysis",
     "Rotor Resonance and Mode Shape Analysis",
     "Rotor Bending and Mechanical Runout Assessment",
     "Rotor Mass Distribution and Unbalance Response Analysis"
    ]
   },
   {
    "title": "Module 2: Advanced Vibration and Phase Analysis for Machinery Balancing",
    "topics": [
     "Advanced FFT Spectrum Analysis",
     "Time Waveform and Vibration Signature Interpretation",
     "Vibration Displacement, Velocity and Acceleration Analysis",
     "Frequency Orders and Harmonic Analysis (1X, 2X, 3X)",
     "Phase Angle Measurement and Interpretation",
     "Tachometer and Keyphasor Reference Analysis",
     "Bode, Polar and Waterfall Plot Interpretation",
     "Orbit Analysis and Shaft Vibration Assessment",
     "Unbalance Signature Identification",
     "Vibration-Based Balancing Verification"
    ]
   },
   {
    "title": "Module 3: International Balancing Standards and Rotor Acceptance Criteria",
    "topics": [
     "ISO 21940 Rotor Balancing Requirements",
     "API 610 and API 617 Balancing Requirements",
     "Balance Quality Grades and G-Grade Selection",
     "Specific Residual Unbalance Determination",
     "Permissible Residual Unbalance Calculations",
     "Balancing Tolerance and Acceptance Limits",
     "Rigid and Flexible Rotor Acceptance Criteria",
     "High-Speed Rotor Balancing Requirements",
     "Balancing Quality Verification and Certification",
     "Engineering Documentation and Compliance Assessment"
    ]
   },
   {
    "title": "Module 4: Advanced Static and Single-Plane Dynamic Balancing",
    "topics": [
     "Static Unbalance Assessment and Correction",
     "Knife-Edge and Roller Balancing Techniques",
     "Heavy-Spot Identification and Correction",
     "Single-Plane Dynamic Balancing Procedures",
     "Trial-Weight Method and Test Run Evaluation",
     "Influence Coefficient Method",
     "Vibration Amplitude and Phase Response Analysis",
     "Correction Weight and Angular Position Calculations",
     "Vector Addition and Subtraction",
     "Single-Plane Balancing Verification"
    ]
   },
   {
    "title": "Module 5: Advanced Two-Plane Dynamic Balancing",
    "topics": [
     "Two-Plane Rotor Balancing Strategy",
     "Selection and Positioning of Balancing Planes",
     "Dual-Sensor Measurement and Phase Reference Configuration",
     "Trial-Weight Testing in Two Planes",
     "Cross-Influence and Rotor Response Analysis",
     "Influence Coefficient Calculations",
     "Two-Plane Correction Weight Determination",
     "Angular Correction and Weight Distribution",
     "Correction Weight Splitting Techniques",
     "Two-Plane Residual Unbalance Verification"
    ]
   },
   {
    "title": "Module 6: Advanced Multi-Plane and Flexible Rotor Balancing",
    "topics": [
     "Multi-Plane Rotor Balancing Methodologies",
     "Selection of Multiple Correction Planes",
     "Multi-Plane Influence Coefficient Method",
     "Matrix-Based Balancing Calculations",
     "Flexible Rotor Dynamic Response Analysis",
     "Modal Balancing Techniques",
     "Rotor Mode Shape Identification",
     "Critical Speed-Related Balancing",
     "High-Speed Flexible Rotor Balancing",
     "Multi-Plane Balancing Verification"
    ]
   },
   {
    "title": "Module 7: Advanced In-Situ Field Balancing of Industrial Machinery",
    "topics": [
     "Advanced Single-Plane Field Balancing",
     "Two-Plane In-Situ Balancing Procedures",
     "Field Vibration and Phase Data Acquisition",
     "Trial-Weight Installation and Response Evaluation",
     "Field Correction Weight Calculations",
     "Balancing of Installed Fans and Blowers",
     "Centrifugal Pump Field Balancing",
     "Motor and Generator Field Balancing",
     "Field Balancing of Industrial Rotating Assemblies",
     "Final Vibration Verification and Acceptance"
    ]
   },
   {
    "title": "Module 8: High-Speed and Equipment-Specific Rotor Balancing",
    "topics": [
     "High-Speed Rotor Balancing Techniques",
     "Centrifugal Pump Rotor and Impeller Balancing",
     "Electric Motor and Generator Rotor Balancing",
     "Industrial Fan and Blower Rotor Balancing",
     "Centrifugal Compressor Rotor and Impeller Balancing",
     "Gas Turbine Rotor Balancing",
     "Steam Turbine Rotor Balancing",
     "Industrial Shaft and Coupling Balancing",
     "Flywheel and Rotating Drum Balancing",
     "Equipment-Specific Balancing Procedures and Acceptance Requirements"
    ]
   },
   {
    "title": "Module 9: Advanced Balancing Instrumentation, Software and Data Analysis",
    "topics": [
     "Advanced Portable Vibration Analyser Operation",
     "Accelerometer and Vibration Sensor Configuration",
     "Laser Tachometer and Phase Reference Measurement",
     "RPM and Phase Data Acquisition",
     "Advanced FFT and Vibration Data Interpretation",
     "Single-Plane and Two-Plane Balancing Instrument Operation",
     "Computerized Balancing Systems",
     "Influence Coefficient Software Applications",
     "Balancing Data Processing and Analysis",
     "Digital Balancing Reports and Performance Records"
    ]
   },
   {
    "title": "Module 10: Advanced Balancing Calculations and Engineering Modelling",
    "topics": [
     "Unbalance Measurement and Engineering Units",
     "Centrifugal Force and Angular Velocity Calculations",
     "Specific Residual Unbalance Calculations",
     "Permissible Residual Unbalance Determination",
     "Trial-Weight Selection and Calculations",
     "Correction Weight and Radius Calculations",
     "Angular Position and Correction Calculations",
     "Vector Analysis and Phasor Diagrams",
     "Two-Plane Influence Coefficient Calculations",
     "Multi-Plane Matrix Calculations",
     "Modal Balancing Calculations",
     "Residual Unbalance and Balancing Quality Verification"
    ]
   },
   {
    "title": "Module 11: Advanced Balancing Fault Diagnosis, Troubleshooting and Root Cause Analysis",
    "topics": [
     "Advanced Rotor Unbalance Identification",
     "Unbalance Versus Misalignment Diagnosis",
     "Unbalance Versus Mechanical Looseness Analysis",
     "Bent Shaft and Rotor Eccentricity Investigation",
     "Bearing Defect and Mechanical Vibration Diagnosis",
     "Resonance-Related Vibration Investigation",
     "Cavitation and Hydraulic Instability Assessment",
     "Electrical and Mechanical Vibration Differentiation",
     "Incorrect Correction Weight and Balancing Error Investigation",
     "Field Balancing Failure Analysis",
     "Root Cause Failure Analysis (RCFA)",
     "Corrective and Preventive Engineering Recommendations"
    ]
   },
   {
    "title": "Module 12: Advanced Industrial Balancing Workshop, Case Studies and Competency Assessment",
    "topics": [
     "Advanced Industrial Balancing Job Planning and Quality Control",
     "Balancing Machine Safety and Correction Weight Attachment Procedures",
     "Static Balancing of Industrial Rotors",
     "Single-Plane and Two-Plane Dynamic Balancing",
     "Multi-Plane and Flexible Rotor Balancing",
     "Practical Balancing of Pump Impellers, Motors and Industrial Fans",
     "Compressor and Turbine Rotor Balancing Demonstrations",
     "In-Situ Field Balancing and Vibration Verification",
     "Industrial High-Speed Machinery Balancing Case Studies",
     "Critical Speed and Resonance Troubleshooting Exercises",
     "Final Rotor Balancing Project and Engineering Report",
     "Practical Competency Examination and Technical Evaluation"
    ]
   }
  ]
 },
 "rotating-diploma": {
  "title": "Diploma in Rotating Equipment Engineering & Reliability Maintenance",
  "price": 210,
  "category": "Rotating Equipment & Mechanical Integrity",
  "img": "https://res.cloudinary.com/dhaufyadl/image/upload/v1776512085/c1_wqim9n.jpg",
  "desc": "",
  "tags": [],
  "lessons": []
 },
 "rotating-diagnosis": {
  "title": "Rotating Equipment - Advanced Diagnosis & Condition Monitoring",
  "price": 240,
  "category": "Rotating Equipment & Mechanical Integrity",
  "img": "https://res.cloudinary.com/dhaufyadl/image/upload/v1776512059/c1b_nokrjz.jpg",
  "desc": "",
  "tags": [],
  "lessons": []
 },
 "turbomachinery": {
  "title": "Advanced Turbomachinery Analysis & Data Acquisition",
  "price": 410,
  "category": "Rotating Equipment & Mechanical Integrity",
  "img": "https://res.cloudinary.com/dhaufyadl/image/upload/v1794167188/IMG-20261108-WA0010_pvuria.jpg",
  "desc": "12 Advanced Professional Modules \u2013 Industry-Focused and Hands-On Practical Training",
  "tags": [
   "12 Modules"
  ],
  "lessons": [
   {
    "t": "Advanced Rotor Dynamics and Turbomachinery Mechanical Analysis",
    "src": ""
   },
   {
    "t": "Advanced Gas Turbine Performance and Combustion Analysis",
    "src": ""
   },
   {
    "t": "Advanced Centrifugal Compressor Performance and Aerodynamic Analysis",
    "src": ""
   },
   {
    "t": "Advanced Steam Turbine Performance and Condition Analysis",
    "src": ""
   },
   {
    "t": "Advanced Machinery Vibration and Shaft Dynamics Analysis",
    "src": ""
   },
   {
    "t": "Advanced Turbomachinery Instrumentation, Data Acquisition and Monitoring",
    "src": ""
   },
   {
    "t": "Advanced Bearing, Lubrication and Seal System Analysis",
    "src": ""
   },
   {
    "t": "Advanced Turbomachinery Transient, Start-Up and Shutdown Analysis",
    "src": ""
   },
   {
    "t": "Advanced Turbomachinery Fault Diagnosis and Root Cause Failure Analysis",
    "src": ""
   },
   {
    "t": "Turbomachinery Analysis Software, Digital Monitoring and Predictive Analytics",
    "src": ""
   },
   {
    "t": "Advanced Field Data Collection, Performance Testing and Industrial Analysis Workshop",
    "src": ""
   },
   {
    "t": "Advanced Industrial Case Studies, Engineering Troubleshooting and Competency Assessment",
    "src": ""
   }
  ],
  "modules": [
   {
    "title": "Module 1: Advanced Rotor Dynamics and Turbomachinery Mechanical Analysis",
    "topics": [
     "Advanced Rotor Dynamic Behaviour and Stability Analysis",
     "Critical Speed and Natural Frequency Analysis",
     "Rotor Whirl and Whip Investigation",
     "Rotor Unbalance Response Analysis",
     "Rotor Resonance and Stability Assessment",
     "Shaft Deflection and Thermal Bow Analysis",
     "Rotor Rub and Internal Clearance Analysis",
     "Rotor Dynamic Modelling and Interpretation",
     "Rotor Stability and Operating Envelope Assessment"
    ]
   },
   {
    "title": "Module 2: Advanced Gas Turbine Performance and Combustion Analysis",
    "topics": [
     "Gas Turbine Thermodynamic Performance Analysis",
     "Compressor Section Performance Assessment",
     "Combustion System Performance Monitoring",
     "Turbine Section Efficiency Analysis",
     "Exhaust Gas Temperature Spreading Analysis",
     "Turbine Inlet Temperature Assessment",
     "Compressor Fouling and Degradation Analysis",
     "Heat Rate and Specific Fuel Consumption Calculations",
     "Turbine Power Output and Efficiency Evaluation",
     "Gas Turbine Performance Trending and Optimization"
    ]
   },
   {
    "title": "Module 3: Advanced Centrifugal Compressor Performance and Aerodynamic Analysis",
    "topics": [
     "Compressor Performance Mapping and Evaluation",
     "Polytropic and Isentropic Head Calculations",
     "Compressor Efficiency and Pressure Ratio Analysis",
     "Surge, Stonewall and Choke Investigation",
     "Anti-Surge Control System Performance Analysis",
     "Surge Margin Calculation and Operating Envelope Assessment",
     "Impeller and Diffuser Aerodynamic Performance",
     "Compressor Gas Composition and Molecular Weight Effects",
     "Compressor Capacity and Power Evaluation",
     "Compressor Performance Degradation Diagnosis"
    ]
   },
   {
    "title": "Module 4: Advanced Steam Turbine Performance and Condition Analysis",
    "topics": [
     "Steam Turbine Performance and Efficiency Analysis",
     "Turbine Blade and Nozzle Performance Assessment",
     "Steam Pressure and Temperature Data Analysis",
     "Steam Flow and Energy Balance Calculations",
     "Turbine Heat Rate and Power Output Evaluation",
     "Condenser and Exhaust System Performance Analysis",
     "Differential Expansion Monitoring",
     "Turbine Rotor Thermal Behaviour Analysis",
     "Steam Turbine Performance Degradation Diagnosis"
    ]
   },
   {
    "title": "Module 5: Advanced Machinery Vibration and Shaft Dynamics Analysis",
    "topics": [
     "Advanced FFT Spectrum Analysis",
     "Time Waveform and Phase Analysis",
     "Orbit, Polar and Bode Plot Interpretation",
     "Waterfall and Cascade Plot Analysis",
     "Shaft Relative and Absolute Vibration Analysis",
     "Shaft Centreline and Axial Position Analysis",
     "Proximity Probe Calibration and Signal Interpretation",
     "Vibration Phase and Cross-Channel Analysis",
     "Critical Speed Passage and Transient Vibration Analysis",
     "Advanced Machinery Fault Identification"
    ]
   },
   {
    "title": "Module 6: Advanced Turbomachinery Instrumentation, Data Acquisition and Monitoring",
    "topics": [
     "Advanced Machinery Sensor Configuration and Calibration",
     "Online and Offline Machinery Data Acquisition",
     "Vibration and Shaft Position Data Collection",
     "Temperature, Pressure and Flow Data Analysis",
     "Speed, Phase Reference and Keyphasor Data Acquisition",
     "Bently Nevada 3500 Monitoring System Configuration",
     "Machinery Protection and Shutdown Monitoring",
     "Alarm and Trip Setpoint Analysis",
     "Data Quality, Validation and Measurement Accuracy",
     "Industrial Machinery Monitoring System Integration"
    ]
   },
   {
    "title": "Module 7: Advanced Bearing, Lubrication and Seal System Analysis",
    "topics": [
     "Journal and Thrust Bearing Performance Analysis",
     "Bearing Oil Film and Clearance Assessment",
     "Bearing Temperature and Vibration Trending",
     "Bearing Failure Diagnosis and Damage Analysis",
     "Lubrication System Performance Evaluation",
     "Oil Contamination and Condition Analysis",
     "Dry Gas Seal Performance Monitoring",
     "Compressor Seal Gas System Analysis",
     "Seal Leakage and Differential Pressure Monitoring",
     "API Seal Support System Performance Assessment"
    ]
   },
   {
    "title": "Module 8: Advanced Turbomachinery Transient, Start-Up and Shutdown Analysis",
    "topics": [
     "Start-Up and Shutdown Machinery Data Analysis",
     "Acceleration and Deceleration Vibration Assessment",
     "Critical Speed Passage Monitoring",
     "Rotor Thermal Bow and Differential Expansion Analysis",
     "Transient Vibration and Stability Evaluation",
     "Load Change and Operating Condition Analysis",
     "Turbine Start-Up Performance Assessment",
     "Compressor Start-Up and Surge Monitoring",
     "Trip Event and Shutdown Data Investigation",
     "Transient Performance Reporting"
    ]
   },
   {
    "title": "Module 9: Advanced Turbomachinery Fault Diagnosis and Root Cause Failure Analysis",
    "topics": [
     "Advanced Machinery Fault Signature Analysis",
     "Rotor Unbalance and Misalignment Diagnosis",
     "Bearing Defect and Lubrication Failure Investigation",
     "Oil Whirl and Oil Whip Diagnosis",
     "Rotor Rub and Mechanical Looseness Investigation",
     "Resonance and Structural Vibration Diagnosis",
     "Compressor Surge and Aerodynamic Instability Diagnosis",
     "Turbine Performance Degradation Investigation",
     "Seal System Failure Analysis",
     "Root Cause Failure Analysis (RCFA)",
     "Corrective and Preventive Engineering Recommendations"
    ]
   },
   {
    "title": "Module 10: Turbomachinery Analysis Software, Digital Monitoring and Predictive Analytics",
    "topics": [
     "Bently Nevada System 1 Machinery Analysis",
     "SKF @ptitude Analyst and Machinery Monitoring",
     "Emerson AMS Machinery Manager",
     "VibXpert and VibroSight Data Analysis",
     "Advanced Vibration Analysis Software Applications",
     "Compressor Performance Modelling and Simulation",
     "Gas Turbine Performance Monitoring Software",
     "Machinery Data Trending and Statistical Analysis",
     "Predictive Maintenance and Condition-Based Monitoring",
     "Digital Machinery Diagnostics and Performance Dashboards"
    ]
   },
   {
    "title": "Module 11: Advanced Field Data Collection, Performance Testing and Industrial Analysis Workshop",
    "topics": [
     "Advanced Turbomachinery Field Data Collection",
     "Vibration Measurement and Diagnostic Exercises",
     "Shaft Orbit and Proximity Probe Data Acquisition",
     "Compressor Performance Testing and Data Interpretation",
     "Gas Turbine Performance Testing and Evaluation",
     "Steam Turbine Performance Assessment",
     "Bearing and Lubrication Condition Assessment",
     "Seal System Monitoring and Performance Evaluation",
     "Machinery Operating Data Verification and Validation",
     "Industrial Machinery Inspection and Technical Reporting",
     "Practical Fault Diagnosis Using Real or Simulated Industrial Data"
    ]
   },
   {
    "title": "Module 12: Advanced Industrial Case Studies, Engineering Troubleshooting and Competency Assessment",
    "topics": [
     "Gas Turbine Vibration and Performance Failure Case Studies",
     "Centrifugal Compressor Surge and Performance Degradation Cases",
     "Steam Turbine Rotor and Thermal Behaviour Case Studies",
     "Bearing and Seal Failure Investigation",
     "Advanced Rotor Dynamic Troubleshooting",
     "Machinery Protection System and Trip Event Investigation",
     "Integrated Turbomachinery Condition Assessment",
     "Industrial Root Cause Failure Analysis Project",
     "Development of Engineering Recommendations",
     "Preparation of Advanced Machinery Analysis Reports",
     "Final Industrial Practical Project and Competency Assessment"
    ]
   }
  ]
 },
 "flange-bolted": {
  "title": "Flange Management & Bolted Joints",
  "price": 200,
  "category": "Rotating Equipment & Mechanical Integrity",
  "img": "https://res.cloudinary.com/dhaufyadl/image/upload/q_auto/f_auto/v1776898624/images_58_dksiib.jpg",
  "desc": "",
  "tags": [],
  "lessons": []
 }
},
  hasAccess(id){ try { return JSON.parse(localStorage.getItem('doilwell-access') || '[]').includes(id); } catch (e) { return false; } },
  grant(id){ try { const a = JSON.parse(localStorage.getItem('doilwell-access') || '[]'); if (!a.includes(id)) a.push(id); localStorage.setItem('doilwell-access', JSON.stringify(a)); } catch (e) {} }
};
function videoPanel(id){
  const D = window.DOILWELL;
  return { id, c: D.courses[id], current: 0, unlocked: D.hasAccess(id),
    get lesson(){ return this.c.lessons[this.current] || { t: this.c.title, src: '' }; },
    pick(i){ if (this.unlocked) this.current = i; } };
}
