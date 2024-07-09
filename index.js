import e from "express";
import fs from "fs";


const app = e();
const port = 3000;

const data = [
  {
    "course_code": "CHEM 101",
    "topics": [
      "Mole Concept",
      "Properties of solutions",
      "Chemical Equilibrium",
      "Redox Reaction",
      "Electrochemistry",
      "Chemical Kinetics",
      "Catalysis",
      "Nuclear Chemistry"
    ]
  },
  {
    "course_code": "COEG 304",
    "topics": [
      "Definition of control systems",
      "History and examples of control systems",
      "Concept of feedback and closed-loop control",
      "Open-loop versus closed-loop systems",
      "Linear system",
      "Time-invariant system",
      "Mathematical modeling of mechanical systems and electrical systems",
      "Mathematical modeling of fluid systems",
      "Laplace transform definitions",
      "Transfer functions",
      "Poles and zeros",
      "Mathematical block diagrams",
      "Block diagram reduction",
      "Transient response analysis of first order systems",
      "Transient response analysis of second order systems",
      "Transient response analysis of higher order systems",
      "Concept of dominant poles",
      "Steady-state error and type of systems",
      "Stability analysis based on impulse response",
      "Routh-Hurwitz stability criterion",
      "Introduction to process control",
      "Control system evaluation",
      "Analog and digital processing",
      "Sensor time response",
      "Introduction of PID controllers",
      "Design of P controller",
      "Principles of analog signal conditioning",
      "Passive circuits",
      "Operational amplifiers",
      "OP-amp circuits in instrumentation",
      "Design guidelines for analog signal conditioning",
      "Review of digital fundamentals",
      "AD and DA converters",
      "Data-acquisition systems",
      "Characteristics of digital data",
      "Thermal sensors and design considerations",
      "Mechanical sensors including displacement, location, position, and proximity sensors",
      "Strain sensors",
      "Motion sensors",
      "Pressure sensors",
      "Flow sensors",
      "Optical encoder",
      "Final control operation",
      "Signal conversions",
      "Power electronics",
      "Actuators (pneumatic, hydraulic, and electrical drives)",
      "Control elements",
      "Examples of control systems"
    ]
  },
  {
    "course_code": "COMP 102",
    "course_name": "Computer Programming",
    "topics": [
      "Introduction",
      "C Fundamentals",
      "C Operators",
      "Writing a Program in C (Data Input and Output)",
      "Control Structure",
      "Function",
      "The Scope of Variable",
      "Array",
      "Pointer",
      "Program Structure"
    ]
  },
  {
    "course_code": "COMP 116",
    "course_name": "Object Oriented Programming",
    "topics": [
      "Introduction to Object Oriented Programming",
      "Introducing C++",
      "Classes and Objects",
      "Object Constructions and Destructions",
      "Operator Overloading",
      "Inheritance",
      "Polymorphism",
      "Template",
      "Exception Handling"
    ]
  },
  {
    "course_code": "COMP 202",
    "course_name": "Data Structures and Algorithms",
    "topics": [
      "The Analysis of Algorithms",
      "Linear Data Structure – Stack",
      "Linear Data Structure-Queue",
      "Linear Data Structure - Linked List",
      "Hierarchical Data Structure - Tree",
      "Graph",
      "Sorting",
      "Searching and Hashing"
    ]
  },
  {
    "course_code": "COMP 204",
    "course_title": "DATA COMMUNICATION AND NETWORKING",
    "topics": [
      "Chapter One: Introduction to data communication and networking",
      "Chapter Two: Physical Layer",
      "Chapter Three: Data Link Layer",
      "Chapter Four: Network Layer",
      "Chapter Five: Transport Layer",
      "Chapter Six: Application Layer",
      "Chapter Seven: Cryptography and Network Security"
    ]
  },
  {
    "course_code": "COMP 206",
    "course_title": "Computer Project I",
    "topics": [
      "Implementation of knowledge and understanding of Data Structure and Algorithms",
      "Digital Logic in relevant project work",
      "Group project work consisting of 3 to 5 students",
      "Evaluation by performance in proposal writing",
      "Implementation",
      "Presentation",
      "Documentation skills"
    ]
  },
  {
    "course_code": "COMP 207",
    "course_title": "Computer Project II",
    "topics": [
      "Implementation of knowledge and understanding of Database Management System",
      "Communication and Networking",
      "Microprocessor and Assembly Language in relevant project work",
      "Group project work consisting of 3 to 5 students",
      "Evaluation by performance in proposal writing",
      "Implementation",
      "Presentation",
      "Documentation skills"
    ]
  },
  {
    "course_code": "COMP 231",
    "course_title": "Microprocessor and Assembly Language",
    "topics": [
      "Introduction",
      "8-Bit Microprocessor",
      "16-Bit Microprocessor",
      "I/O Interfaces"
    ]
  },
  {
    "course_code": "COMP 232",
    "course_title": "Database Management System",
    "topics": [
      "Introduction",
      "Database Design",
      "Relational Model",
      "Relational Database Design",
      "Transactions",
      "Concurrency Control",
      "Database Recovery Techniques",
      "New Trends in Database"
    ]
  },
  {
    "course_code": "COMP 301",
    "course_title": "Principles of Programming Languages (POPL)",
    "topics": [
      "Introduction",
      "Evolution of the Major Programming Languages",
      "Describing Syntax and Semantics",
      "Lexical and Syntax Analysis",
      "Names, Bindings, Type Checking, and Scopes",
      "Type Checking and Scopes continued",
      "Data Types",
      "Expression and Assignment Statements",
      "Subprograms",
      "Subprograms continued",
      "Implementing Subprograms",
      "Abstract Data Types and Encapsulation Constructs",
      "Functional Programming Languages",
      "Logic Programming Languages"
    ]
  },
  {
    "course_code": "COMP 302",
    "course_title": "System Analysis and Design",
    "topics": [
      "Introduction to System Analysis and Design",
      "Concept Formation",
      "Requirement Analysis",
      "Data Flow diagram (DFD)",
      "Process Descriptions",
      "Designing Databases",
      "Object Modeling",
      "Quality Assurance: Reviews, Walkthroughs and inspections",
      "Introduction to Software Engineering"
    ]
  },
  {
    "course_code": "COMP 304",
    "course_title": "Operations Research",
    "topics": [
      "A review of Matrix Algebra",
      "Linear Programming",
      "Integer Programming",
      "Transportation Models",
      "Assignment Model",
      "Simulation (Monte-Carlo Technique)",
      "Queuing Models",
      "Network Planning"
    ]
  },
  {
    "course_code": "COMP 306",
    "course_title": "Embedded Systems",
    "topics": [
      "History and Overview of Embedded Systems",
      "Fundamentals of Embedded Systems",
      "Hardware Architecture",
      "Software Architecture",
      "Programming for Embedded Systems",
      "Software Engineering Considerations",
      "Embedded Operating Systems",
      "Communication Interfaces",
      "Hardware Platforms",
      "Representative Embedded Systems"
    ]
  },
  {
    "course_code": "COMP 307",
    "course_title": "Operating System",
    "topics": [
      "Introduction",
      "Operating System Structures",
      "Processes",
      "Scheduling",
      "Deadlock",
      "Memory Management",
      "Virtual Memory",
      "File System Interface",
      "I/O System",
      "Distributed System Structure"
    ]
  },
  {
    "course_code": "COMP 308",
    "course_title": "Combined Engineering Project",
    "topics": [
      "Implementation of Knowledge and Understanding of Algorithms and Complexity",
      "Embedded System",
      "Analytical and Research Activities",
      "Group Project Work",
      "Evaluation of Proposal Writing",
      "Implementation",
      "Presentation",
      "Documentation Skills"
    ]
  },
  {
    "course_code": "COMP 310",
    "course_title": "Laboratory Work",
    "topics": [
      "Lab Works for COMP 301 - Principles of Programming Languages",
      "Lab Works for COEG 304 - Instrumentation and Control",
      "Programming Concepts",
      "Control and Automation Concepts",
      "Software/Hardware Projects"
    ]
  },
  {
    "course_code": "COMP 314",
    "course_title": "Algorithms and Complexity",
    "topics": [
      "Introduction to Algorithms",
      "Mathematical Preliminaries of Foundations",
      "Analysis of Sorting Algorithms",
      "Data Structures Basics: Stack, Queue, Linked List, Binary Search Tree",
      "Efficient Binary Search Trees: AVL Tree, Red-Black Trees",
      "Multiway Search Trees: B-Tree, B+-Tree",
      "Priority Queues: Binomial Heap, Fibonacci Heap",
      "Graph Data Structure: Representation, Traversal",
      "Algorithmic Strategies: Brute-force, Greedy, Divide and Conquer, Backtracking, Branch-and-bound",
      "Dynamic Programming: Matrix Chain Multiplication, Longest Common Subsequence",
      "Probabilistic and Parallel Algorithms",
      "NP-Completeness"
    ]
  },
  {
    "course_code": "COMP 315",
    "course_title": "Computer Architecture and Organization",
    "topics": [
      "Basic Structures: Sequential Circuits, Von Neumann Architecture",
      "Addressing Methods and Programs: Instruction Cycle, Bus Structures",
      "Processing Unit: Instruction Formats, Arithmetic and Logical Operations",
      "Addressing Modes: Single and Multi-component",
      "Input Output Organization: Interrupt Driven I/O, DMA",
      "Arithmetic: Magnitude Comparator, Addition, Subtraction, Multiplication, Division",
      "Memory System: Auxiliary Memory, RAM/ROM Chips",
      "Memory: Memory Address Map, Memory Hierarchy, Associative Memory, Virtual Memory, Cache Memory"
    ]
  },
  {
    "course_code": "COMP 342",
    "Main Topics": [
      "Introduction to Graphics",
      "Basic Raster Graphics Algorithms for Drawing 2D Primitives",
      "Graphics Hardware",
      "Geometric Transformation (2D)",
      "Viewing in 2D",
      "Geometric Transformation (3D)",
      "Visible Surface Detection Methods",
      "Illumination Models and Surface Rendering Methods",
      "Color Models and Color Applications",
      "Advanced Topics on Computer Graphics"
    ]
  },
  {
    "course_code": "COMP 343",
    "topics": [
      "An Overview of Ethics",
      "Ethics for IT Workers and IT Users",
      "Computer and Internet Crime",
      "Privacy",
      "Intellectual Property",
      "Freedom of Expression",
      "Social Networking",
      "Ethics of IT Organizations",
      "Case Studies in Information Technology Ethics"
    ]
  },
  {
    "course_code": "COMP 401",
    "topics": [
      "Introduction",
      "Software Process model",
      "System Engineering",
      "Requirement Engineering",
      "Project Management",
      "Software Project Planning",
      "Software Quality Assurance",
      "Software Testing Techniques"
    ]
  },
  {
    "course_code": "COMP 407",
    "topics": [
      "Introduction to signals and systems",
      "Sampling of Continuous-time signals",
      "Fourier Analysis",
      "Discrete Fourier Transform",
      "Z-transform",
      "Discrete Filters",
      "IIR Filter Design",
      "FIR Filter Design"
    ]
  },
  {
    "course_code": "COMP 408",
    "topics": []
  },
  {
    "course_code": "COMP 409",
    "topics": [
      "Introduction to Compilers",
      "Lexical Analysis",
      "Syntax Analysis",
      "Syntax Directed Translation and Run-Time Environments",
      "Introduction to Intermediate Code Generation",
      "Introduction to Code Optimization"
    ]
  },
  {
    "course_code": "COMP 472",
    "topics": [
      "Introduction",
      "Problem Solving",
      "Knowledge and Reasoning",
      "Structured Knowledge Representation",
      "Artificial Neural Network"
    ]
  },
  {
    "course_code": "EDRG 101",
    "topics": [
      "Introduction Of Engineering Drawing And Instruments Used In Engineering Drawing",
      "Dimensioning",
      "Engineering Scale",
      "Geometrical Constructions",
      "Introduction Of Engineering Curves",
      "Orthographic Projections",
      "Projection of Plane Surfaces",
      "Projection of Solids",
      "Surface Development"
    ]
  },
  {
    "course_code": "EDRG 102",
    "topics": [
      "Isometric Projection",
      "Production drawing",
      "Screw threads",
      "Fasteners",
      "Section of solids",
      "Intersection of solids",
      "Development of surfaces"
    ]
  },
  {
    "course_code": "EEEG 202",
    "topics": [
      "Introduction to Digital Systems",
      "Number Systems and Codes",
      "Boolean Algebra and Logic Gates",
      "Simplification of Boolean Functions",
      "Combinational Logic",
      "Sequential Logic circuits",
      "Registers, Counters and Memories"
    ]
  },
  {
    "course_code": "EEEG 211",
    "topics": [
      "Diodes",
      "Bipolar Junction Transistor",
      "Field Effect Transistor",
      "Amplifiers",
      "Power Amplifiers",
      "Operational Amplifiers"
    ]
  },
  {
    "course_code": "EEEG 217",
    "topics": [
      "Verification of truth tables for different logic gates: AND, OR, NOT, NAND, NOR",
      "Synthesize X-OR and X-NOR using NAND gates",
      "Design and verification of simple logic circuit using primitive logic gates",
      "Half adder and full adder",
      "Decoder/Demultiplexer (Using IC)",
      "Construct encoder and decoder",
      "BCD adder and binary multiplier using Multisim",
      "Design a door lock system",
      "Construction of 4 to 1 MUX",
      "Truth table verification and synthesis of flip flops, JK, T and D",
      "Synchronous and asynchronous counter design, Decade counter",
      "Design of sequential circuit using D flip flops from given state diagram in Multisim"
    ]
  },
  {
    "course_code": "ENGG 101",
    "topics": [
      "Introduction: Definition of project, Practical exercise to draw out importance of setting goals, planning, working as a team, and assessing final achievements.",
      "Workshop Skills: Various workshop skills such as metal working, woodworking, use of hand tools, drilling and welding.",
      "Mini project: Use of the above skills to work on a small constructional project in a team.",
      "Course plan: The first week will be classroom based and introduction part of the course will be covered. Second part of the course is in the mechanical workshop. This hand out describes the exercise to be done in mechanical workshop."
    ]
  },
  {
    "course_code": "ENGG 102",
    "topics": [
      "It involves the basic implementation of programming skills, knowledge and understanding of Structured Programming and Object Oriented Programming. It is a group project work consisting of 3 to 5 students, where individuals are evaluated by their performance in proposal writing, implementation, presentation and documentation skills."
    ]
  },
  {
    "course_code": "ENGT 111",
    "topics": [
      "Engineering Mechanics and Strength of Materials",
      "Building Materials, Components, and Structure",
      "Surveying",
      "Thermal Engineering and Thermal Power Plants",
      "Fluid Mechanics and Hydraulic Machinery"
    ]
  },
  {
    "course_code": "ENGG 112",
    "topics": [
      "Basic Circuit Theory",
      "AC Circuit Fundamentals",
      "Magnetic Circuits and Transformers",
      "Electrical Machines and Instruments"
    ]
  },
  {
    "course_code": "ENGT 105",
    "topics": [
      "Technical Communication Basics",
      "Strategic/Rhetorical Communication",
      "Organizational and Business Communication",
      "Research Design and Innovation",
      "Critical and Creative Thinking"
    ]
  },
  {
    "course_code": "ENVE 101",
    "topics": [
      "Introduction to Environmental Engineering",
      "Units of Measurement",
      "Ecosystem and System Approach",
      "Mass Transfer",
      "Basics of Pollution Control and Waste Treatment",
      "Environmental Quality Parameters",
      "Environmental Management System",
      "Green Engineering and Built Environment"
    ]
  },
  {
    "course_code": "MATH 101",
    "topics": [
      "Increments",
      "Limits and continuity",
      "Differentiation",
      "Applications of derivatives",
      "Integration",
      "Application of Definite integrals"
    ]
  },
  {
    "course_code": "MATH 104",
    "topics": [
      "Coordinates Systems",
      "Functions of several variables and Their Derivatives",
      "Multiple Integrals",
      "Beta and Gamma Functions",
      "Applications of the Theory of Integration",
      "Vector Functions and Their Derivatives",
      "Vector Integral Calculus",
      "Fourier Series and Integrals"
    ]
  },
  {
    "course_code": "MATH 207",
    "topics": [
      "First Order Differential Equations",
      "Linear Second Order Differential Equations",
      "Series Solutions of Differential Equations",
      "Partial Differential Equations",
      "Laplace Transforms",
      "Complex Variables"
    ]
  },
  {
    "course_code": "MATH 208",
    "topics": [
      "Introduction to Statistics and Data Description",
      "Probability",
      "One Dimensional Random Variables",
      "Functions of One Random Variable and Mathematical Expectation",
      "Some Important Discrete Distributions",
      "The Normal Distribution",
      "Random Samples and Sampling Distributions",
      "Estimation",
      "Tests of Hypotheses",
      "Simple Linear Regression and Correlation",
      "Statistical Quality Control"
    ]
  },
  {
    "course_code": "MCSC 201",
    "topics": [
      "Fundamentals",
      "Logic",
      "Relations and Diagraphs",
      "Functions",
      "Order Relations and Structures",
      "Graph Theory",
      "Semigroups and Groups"
    ]
  },
  {
    "course_code": "MCSC 202",
    "topics": [
      "Basic introduction of Computer programming language",
      "Errors in numerical computation",
      "Root findings",
      "Finite differences and Interpolation",
      "Solving ODE (IVP)",
      "Numerical Differentiation and Integration",
      "Matrices and System of linear equations",
      "Curve fitting"
    ]
  },
  {
    "course_code": "MGTS 301",
    "topics": [
      "Introduction to Engineering Economy",
      "Cost Concepts and Design Economics",
      "Money-Time Relationships and Equivalence",
      "Applications of Money-Time Relationship",
      "Comparing Alternatives",
      "Cost & Benefit Estimation Techniques",
      "Depreciation",
      "Dealing with Uncertainty"
    ]
  },
  {
    "course_code": "MGTS 402",
    "topics": [
      "The Challenge of Entrepreneurship",
      "Inside the Entrepreneurial Mind: From Ideas to Reality",
      "Building the Business Plan: Beginning Considerations",
      "Designing a Competitive Business Model and Building a Solid Strategic Plan",
      "Conducting a Feasibility Analysis and Crafting a Winning Business Plan",
      "Forms of Business Ownership",
      "Building the Business Plan: Marketing and Financial Considerations",
      "Sources of Financing: Debt and Equity"
    ]
  },
  {
    "course_code": "MGTS 403",
    "topics": [
      "Introduction to Engineering Management",
      "Historical Development of Engineering Management",
      "Functions of Technology Management",
      "Managing Technology through the Product Life Cycle",
      "Managing Projects",
      "Managing your Engineering Career",
      "Special Topics in Engineering Management"
    ]
  },
  {
    "course_code": "PHYS 101",
    "topics": [
      "Mechanics",
      "Rotational Dynamics",
      "Wave and Oscillation",
      "Elasticity",
      "Viscosity",
      "Optics",
      "Interference",
      "Diffraction",
      "Polarization",
      "Laser",
      "Heat transfer"
    ]
  },
  {
    "course_code": "PHYS 102",
    "topics": [
      "Electricity and Magnetism",
      "Vector Analysis",
      "Electrostatic field",
      "Electrostatic field in matter",
      "Magnetostatics",
      "Magnetostatic field in matter",
      "Electromagnetic induction",
      "Electromagnetic wave propagation",
      "Modern Physics",
      "Physics of atoms and molecules",
      "Nuclear physics"
    ]
  }
]

app.get("/:code", (req, res) => {
  // const jsonString = fs.readFileSync("./syllabus.json", "utf-8");
  // const data = JSON.parse(jsonString);
  res.json(data.find((subj) => subj.course_code == req.params.code));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
