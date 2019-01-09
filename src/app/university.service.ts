import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor() { }

  public university= [
    'Faculté de Lettres et Sciences Humaines (FLSH)',
    'Faculté de Sciences Juridiques et Politiques (FSJP)',
    'Faculté de Sciences (FS)',
    'Faculté de Sciences Economiques et de Gestion Appliquée (FSEGA)',
    'Faculté de Génie Industriel (FGI)',
    'Faculté de Médecine et des Sciences pharmaceutiques (FMSP)',
    'Ecole Supérieure des Sciences Economiques et Commerciales (ESSEC)',
    "Ecole Normale Supérieure d'Enseignement Technique (ENSET)",
    'Institut Universitaire de Technologie (IUT)',
  ]

  public spinneret=[//FLSH
    'Anthropologie' ,'Communication', 'Communication et développement durable', 
    'Communication évènementielle et publicitaire', 'Didactique du français', 'English', 
    'Etudes bilingues', 'Etudes germaniques','Etudes ibériques','Géographie',
    'Gestion des ressources humaines','Gestion et études sociopolitiques','Histoire',
    'Langue littérature','Langues africaines, linguistique','Littérature négro-africaine',
    'Philosophie Psychologie',"Psychopédagogie et sciences de l'éducation",'Sociologie', 
    'Translation and interpretation business and communication english language teachings',
           //FS
    'Algèbre, analyse et géométrie', 'Biochimie', 'Bio-informatique et bio statistiques',
    'Biologie des organismes et des écosystèmes', 'Biologie humaine et santé', 
    'Biologie moléculaire et cellulaire', 'Biologie des organismes et des écosystèmes',
    'Chimie de l’environnement', 'Chimie et biologie', 'Chimie inorganique', 'Chimie organique',
    'Chimie–physique', 'Ecologie et environnement', 'Economie et mathématiques', 
    'Formation de surface et de subsurface', 'Géosciences', 'Informatique', 
    'Mathématiques et applications', 'Mathématiques et informatique',
    'Méthodes informatiques appliquées à la gestion des entreprises (MIAGE)', 
    'Pétrologie et structurale', 'Pétromines', 'Physiologie animale générale',
    'Physique et applications', 'Physique et mécanique', 'Physique fondamentale', 
    'Physique–chimie', 'Qualité, sécurité, environnement', 
    'Sciences alimentaires et nutrition', 'Unité de formation doctorale de bio-géosciences et environnement', 
    'Unité de formation doctorale de chimie et biochimie', 
    'Unité de formation doctorale de mathématiques appliquées et physique fondamentale',
    'Zoologie approfondie',
              //FSEGA
    'Administration et gestion des collectivités territoriales décentralisées', 
    'Création et management des entreprises touristiques',  'Administration des entreprises',
    'Comptabilité et finance',  'Comptabilité, audit, contrôle',  'Expertise comptable',
    'Gestion financière et bancaire', 'Marketing-commerce-vente',
    'Sciences et techniques comptables et financières', 'Comptabilité-finance', 
    'Marketing-commerce-vente', 'sciences et techniques comptables et financières',
    'Actuariat',  'Administration et gestion des collectivités territoriales décentralisées',
    'Analyse et évaluation des projets',
              //FGI
    'Administration réseaux', 'Carrosserie et suspensions', 'Construction civile',
    'Construction industrielle', 'Construction mécanique', 'Construction navale',
    'Environnement industriel', 'Fabrication mécanique/productique', 'Génie mécanique navale', 
    'Gestion d’entreprise de pêche', 'Hygiène industrielle', 'Mécatronique',
    'Moteur et transmission', 'Ouvrages hydrauliques', 'Qualité et normalisation',
    'Radio et télévision', 'Sécurité et sûreté industrielles', 'Télécommunication',
    'Voies et ouvrages d’art',
               //FMSP
    'Pharmacie','Médecine','Biologie clinique','Ethnobotanique et Pharmacie galénique',
              //ESSEC
    'Etudes en administration des affaires', 
    'Etudes en commerce international et supply chain management', 
    'Etudes professionnelles approfondies', 'Etudes professionnelles en organisation et management', 
    'Etudes professionnelles en techniques de gestion des pme/pmi', 'Etudes supérieures de commerce',
               //ENSET
    "Banque et micro finance", "Comptabilité-finance-audit", "Génie civil",
    "Génie mécanique et productique", "Gestion des projets informatiques", 
    "Gestion des ressources humaines", "Gestion technico-commerciale", 
    "Industrie textile et de l'habillement", "Maintenance après-vente automobile", "Métiers bois",
    "Réseau et télécommunication",
                //UIT
    "Action commerciale", "Administration et sécurité des réseaux", 
    "Commerce-négociation-vente::  Comptabilité et gestion", "Construction mécanique", "Electronique",
    "Fabrication mécanique", "Génie biomédical", "Génie des mines",
    "Génie des réseaux et télécommunication", "Génie électrique et informatique industrielle", 
    "Génie ferroviaire", "Génie industriel et maintenance", "Génie informatique", "Génie logiciel",
    "Génie logistique et transport", "Génie mécanique et productique", "Génie métallurgique", 
    "Génie thermique et énergie", "Gestion appliquée aux petites et moyennes organisations", 
    "Gestion comptable financière", "Informatique industrielle", "Logistique industrielle",
    "Organisation et gestion administrative", "Pétrole, gaz",
    "Qualité, hygiène et sécurité des aliments",
    "Valorisation des énergies renouvelables-production de la petite énergie",
    
    
    //Tronc commun

    'Tronc commun'
  ]
}
