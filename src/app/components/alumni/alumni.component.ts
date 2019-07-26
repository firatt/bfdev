import { Component } from "@angular/core";

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.css']
})
export class AlumniComponent {

  grads = [
    {
      date: "Oct 2018",
      degree: "M.Sc.",
      candidate: "Cansu Karakaya",
      thesisTitle: "Gene Expression during Aortic Arch Development and Remodeling in Chick Embryos-A Time Lapsed Network Analysis / PhD student USA"
    },
    {
      date: "Jan 2017",
      degree: "M.Sc.",
      candidate: "Fazil Uslu",
      thesisTitle: "Tomographic PIV in bioinspired fluid mechanics / PhD student at EPFL"
    },
    {
      date: "Feb 2017 *",
      degree: "Ph.D.",
      candidate: "Reza Rasooli",
      thesisTitle: "Micro and tomographic PIV in bio-fluid mechanics"
    },
    {
      date: "Feb 2017 *",
      degree: "Ph.D.",
      candidate: "Bilgesu Çakmak",
      thesisTitle: "New tools for medical image analysis – OCT/μCT (co-supervised with Murat Tekalp)"
    },
    {
      date: "Jun 2017",
      degree: "M.Sc.",
      candidate: "Ece Tutsak",
      thesisTitle: "Novel ventricle assist devices for single-ventricle patients Politecnico di Milano - Ph.D. student"
    },
    {
      date: "Feb 2017 *",
      degree: "M.Sc.",
      candidate: "Canberk Yildirim",
      thesisTitle: "Reproductive biomechanics (co-supervised with Dr. Ege Can Seferoglu and Prof. Hakan Erturk, Bosporus University)"
    },
    {
      date: "Jun 2016 *",
      degree: "Ph.D.",
      candidate: "Banu Köse",
      thesisTitle: "Pre-surgical planning and rapid prototyping in congenital heart disease (at Medipol University)"
    },
    {
      date: "July 2016",
      degree: "M.Sc.",
      candidate: "Samir Donmezov",
      thesisTitle: "Cardiovascular Solid Mechanics - optimization of vessel constituents"
    },
    {
      date: "Sep 2015 *",
      degree: "Ph.D.",
      candidate: "Samane Lashkarinia",
      thesisTitle: "Pre-surgical planning of cardiovascular patch implantation growth FeBIO"
    },
    {
      date: "Sep 2014 *",
      degree: "Ph.D.",
      candidate: "Gokce Nur Turkmen",
      thesisTitle: "Open source computational tools for cardiovascular fluid mechanics"
    },
    {
      date: "Jul 2014",
      degree: "M.Sc.",
      candidate: "Berk Yigit",
      thesisTitle: "Lumped parameter modeling of fetal transition and chord clamping hemodynamics / PhD student at Max Planck Institute, Germany"
    },
    {
      date: "Jun 2014",
      degree: "Ph.D.",
      candidate: "William Kowalski",
      thesisTitle: "Hemodynamic models of embryonic cardiovascular development / Research scientist at National Institutes of Health - USA"
    },
    {
      date: "Jun 2013",
      degree: "Ph.D.",
      candidate: "Prahlad Menon",
      thesisTitle: "Computational fluid dynamics solver for biomimetic micro propulsion / Tenure-track faculty at Duquesne University - USA"
    },
    {
      date: "Nov 2013",
      degree: "Ph.D.",
      candidate: "Chia-Yuan Chen",
      thesisTitle: "Confocal micro particle image velocimetry and embryonic blood flow regulation via micro-fabrication / Associate Professor - National Cheng Kung University Thailand"
    },
    {
      date: "Oct 2012",
      degree: "M.Sc.",
      candidate: "Priti Abdal",
      thesisTitle: "In vitro test system to study novel fenestration design for congenital heart surgery / Senior Biomedical Engineer at ALung Technologies"
    },
    {
      date: "Oct 2012",
      degree: "M.Sc.",
      candidate: "Arush Karla",
      thesisTitle: "Unsteady right ventricular valve 3D leaflet visualization / Chief Scientific Officer, PeCa Labs, USA"
    },
    {
      date: "Jun 2011",
      degree: "Ph.D.",
      candidate: "Onur Dur",
      thesisTitle: "Patient-specific computational fluid dynamics and surgical planning optimization / Research engineer at Thoratec - USA, Wavelet Health CTO"
    },
    {
      date: "Jun 2011",
      degree: "Ph.D.",
      candidate: "Dennis Trumble",
      thesisTitle: "Development and testing of a muscle-powered cardiac assist device (co- supervised with Jim Antaki) / Assistant Research Professor Carnegie Mellon University"
    },
    {
      date: "Jun 2011",
      degree: "M.Sc.",
      candidate: "Aman Chawla",
      thesisTitle: "Physics-based correction of cardiac perfusion scans / Lead Associate at Booz Allen Hamilton, Washington D.C."
    },
    {
      date: "Jul 2011",
      degree: "M.Sc.",
      candidate: "Basar Seckin",
      thesisTitle: "Propulsion Nozzle Design via Neural Network Optimization / Roketsan Space Systems Director (co-supervised with Ahmet Ucer) Postdoctoral Researcher, Instituto Superior Técnico, Portugal"
    },
    {
      date: "Jun 2009",
      degree: "M.Sc.",
      candidate: "Umit Danis",
      thesisTitle: "Optimizing bacterial propulsion / lt. col. Turkish Navy"
    },
    {
      date: "Oct 2008",
      degree: "M.Sc.",
      candidate: "Yajuan Wang",
      thesisTitle: "Aortic arch morphogenesis and flow modeling in the chick embryo / IBM Watson Health"
    },
    {
      date: "Apr 2001",
      degree: "M.Sc.",
      candidate: "Berrak Alparslan",
      thesisTitle: "Unsteady wave-rotor propulsion (AIAA best thesis award) / Turkish Engine Industries (co-supervised with Razi Nalim)"
    }
  ]

  committees = [
    {
      date: "Feb 2019",
      degree: "Ph.D.",
      candidate: "Erhan Tenekecioglu",
      thesisTitle: "Local Hemodynamic Microenvironment in Biodegradable Scaffolds, Erasmus MC, (advisor: Patrick W. Serruys)"
    },
    {
      date: "Jun 2018",
      degree: "M.Sc.",
      candidate: "Ayse Cetin",
      thesisTitle: "3D Fluid-structure interaction red blood cell flow, ITU (advisor: Mehmet Sahin)"
    },
    {
      date: "Apr 2018",
      degree: "Ph.D.",
      candidate: "I. Basar Aka",
      thesisTitle: "Design and Performance Optimization of Heart Assist Devices: iHeart VAD and iATVA (advisor: Ismail Lazoglu)"
    },
    {
      date: "Apr 2018",
      degree: "Ph.D.",
      candidate: "Caglar Ozturk",
      thesisTitle: "Development of a Novel Centrifugal Left Ventricular Assist Device and the First In Vivo Study: Istanbul Heart VAD (advisor: Ismail Lazoglu)"
    },
    {
      date: "Sep 2016",
      degree: "Ph.D.",
      candidate: "Gursan Coban",
      thesisTitle: "Cardiovascular Growth Modeling, ITU (advisor: M. Serdar CELEBİ)"
    },
    {
      date: "Jan 2016",
      degree: "Ph.D.",
      candidate: "Daulet Izbassarov",
      thesisTitle: "Computational analysis of viscoelastic droplets (advisor: Metin Muradoglu)"
    },
    {
      date: "Jan 2013",
      degree: "Ph.D.",
      candidate: "Jinmo Lee",
      thesisTitle: "Computational fluid dynamics of flipping propulsion (advisor: Donghyun You)"
    },
    {
      date: "Jun 2011",
      degree: "Ph.D.",
      candidate: "William Bromby",
      thesisTitle: "(advisor: Fred Higgs)"
    },
    {
      date: "Jul 2010",
      degree: "Ph.D.",
      candidate: "Gail Siewiorek",
      thesisTitle: "Hemodynamics of cloth capturing devices (advisor: Ender Finol)"
    },
    {
      date: "Jun 2010",
      degree: "M.Sc.",
      candidate: "Peng Liu",
      thesisTitle: "Hemodynamic boundary conditions via conformal mapping (advisor: Ender Finol)"
    },
    {
      date: "Jul 2008",
      degree: "Ph.D.",
      candidate: "Arielle Drummond",
      thesisTitle: "Anatomical placement of ventricle assist devices (advisor: James Antaki) / Research Engineer, Circulite, USA"
    },
    {
      date: "Jun 2008",
      degree: "Ph.D.",
      candidate: "Rui Zhao",
      thesisTitle: "Blood damage and platelet activation (advisor: James Antaki)"
    },
    {
      date: "Sep 2007",
      degree: "Ph.D.",
      candidate: "Christine Scotti",
      thesisTitle: "In vitro and in vivo dynamics of abdominal aortic aneurysms: a fluid- structure interaction study (advisor: Ender Finol) / Research Engineer, SurgicalMedical, Technology Center, Arizona"
    }
  ]

  employees = [
    {
      duration: "Sep 2018 – Present",
      fellow: "Dr. Ibrahim Baris Aka",
      study: "Cardiovascular devices, rvot valves and blood turbines",
      current: ""
    },
    {
      duration: "May 2018 – Present",
      fellow: "Ms. Merve Celik",
      study: "Molecular Biology in Cardiovascular and Tissue Engineering",
      current: ""
    },
    {
      duration: "Sep 2016 – Present",
      fellow: "Dr. Muhammad Jamil",
      study: "Double lumen cannula and outflow tract septation",
      current: ""
    },
    {
      duration: "Oct 2016 – Present",
      fellow: "Dr. Gursan Coban",
      study: "Embryonic vascular growth models",
      current: ""
    },
    {
      duration: "Jul 2013 – Jun 2017",
      fellow: "Dr. Senol Piskin",
      study: "Computational cardiovascular fluid mechanics",
      current: "Research Assistant Professor / University of Texas San Antonio"
    },
    {
      duration: "Oct 2015 – Oct 2017",
      fellow: "Dr. Volkan Tuncay",
      study: "Cardiovascular Imaging and Pre-surgical planning",
      current: "Philips - Netherlands"
    },
    {
      duration: "Mar 2011 – May 2012",
      fellow: "Dr. Raúl Antón Remírez",
      study: "Experimental fluid dynamics of Abdominal Aneurysms (Co-supervised with Ender Finol)",
      current: "Dean at Tecnun-School of Engineering, University of Navarra"
    },
    {
      duration: "Jun 2013 – Sep 2017",
      fellow: "Dr. Selda Goktas",
      study: "Aortic arch development",
      current: ""
    },
    {
      duration: "Oct 2010 – Oct 2012",
      fellow: "Michael Patrick",
      study: "Confocal microscopy of flowing red blood cells",
      current: "Senior Hazardous Materials Safety Specialist – Carnegie Mellon University"
    }
  ]
}