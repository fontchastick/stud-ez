import { Injectable } from "@angular/core";

@Injectable()
export class UniversitiesServices {

    public spinnerets= [];

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
            'Institut Universitaire de la Côte (IUC)'
          ]
        
          public FLSH = [' ', 'Anthropologie' ,'Communication', 'Communication et développement durable', 
          'Communication évènementielle et publicitaire', 'Didactique du français', 'English', 
          'Etudes bilingues', 'Etudes germaniques','Etudes ibériques','Géographie',
          'Gestion des ressources humaines','Gestion et études sociopolitiques','Histoire',
          'Langue littérature','Langues africaines, linguistique','Littérature négro-africaine',
          'Philosophie Psychologie',"Psychopédagogie et sciences de l'éducation",'Sociologie', 
          'Translation and interpretation business and communication english language teachings', 
          'Tronc commun']

          public FSJP = [ "En cours d'ajustement!"]

          public FS = [' ', 'Algèbre, analyse et géométrie', 'Biochimie', 'Bio-informatique et bio statistiques'
            , 'Biologie des organismes et des écosystèmes', 'Biologie humaine et santé', 
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
            'Tronc commun', 'Unité de formation doctorale de chimie et biochimie', 
            'Unité de formation doctorale de mathématiques appliquées et physique fondamentale',
            'Zoologie approfondie']

         public FSEGA = [' ', 'Actuariat', 'Administration et gestion des collectivités territoriales décentralisées', 
            'Analyse et évaluation des projets','Administration des entreprises','Comptabilité et finance',
            'Comptabilité-finance','Création et management des entreprises touristiques',
            'Comptabilité, audit, contrôle', 'Expertise comptable', 'Gestion financière et bancaire',
             'Marketing-commerce-vente', 'Sciences et techniques comptables et financières', 'Tronc commun'
             ]

         public FGI = [' ', 'Génie civil','TCI : Technologie de Construction Industrielle','TAU : Technologie Automobile',
            'ROI: Robotique Industrielle', 'PEI/GM : Pêche/Génie Maritime',
             "TTIC : télécommunication et Technologie de l'information et de la communication",
            'HSSI: Hygiène Sécurité et Sûreté Industrielle', 'GPR/GCH : Génie des Procédés/Génie Chimique', 'Tronc commun']

        public FMSP = [' ', 'Pharmacie','Médecine','Biologie clinique','Ethnobotanique et Pharmacie galénique']

        public ESSEC = [' ', 'Etudes en administration des affaires', 
        'Etudes en commerce international et supply chain management', 
        'Etudes professionnelles approfondies', 'Etudes professionnelles en organisation et management', 
        'Etudes professionnelles en techniques de gestion des pme/pmi', 'Etudes supérieures de commerce', 'Tronc commun']

        public ENSET = [' ', "Banque et micro finance", "Comptabilité-finance-audit", "Génie civil",
         "Génie mécanique et productique", "Gestion des projets informatiques", 
         "Gestion des ressources humaines", "Gestion technico-commerciale", 
         "Industrie textile et de l'habillement", "Maintenance après-vente automobile", "Métiers bois",
          "Réseau et télécommunication", 'Tronc commun']
        
        public IUT = [' ', "Action commerciale", "Administration et sécurité des réseaux", 
        "Commerce-négociation-vente::  Comptabilité et gestion", "Construction mécanique", "Electronique",
         "Fabrication mécanique", "Génie biomédical", "Génie des mines",
          "Génie des réseaux et télécommunication", "Génie électrique et informatique industrielle", 
        "Génie ferroviaire", "Génie industriel et maintenance", "Génie informatique", "Génie logiciel",
        "Génie logistique et transport", "Génie mécanique et productique", "Génie métallurgique", 
        "Génie thermique et énergie", "Gestion appliquée aux petites et moyennes organisations", 
         "Gestion comptable financière", "Informatique industrielle", "Logistique industrielle",
         "Organisation et gestion administrative", "Pétrole, gaz",
          "Qualité, hygiène et sécurité des aliments", 'Tronc commun',
           "Valorisation des énergies renouvelables-production de la petite énergie"]

           public IUC = [' ', "TIC 1A", "TIC 1B", "TIC 1C"]
    
    constructor() {

    }

getSpinnerets(university) {
    switch(university) {
        case 'Faculté de Lettres et Sciences Humaines (FLSH)':
            this.spinnerets = this.FLSH;
            break;
        case 'Faculté de Sciences Juridiques et Politiques (FSJP)':
            this.spinnerets = this.FSJP;
            break;
        case 'Faculté de Sciences (FS)':
            this.spinnerets = this.FS;
            break;
        case 'Faculté de Sciences Economiques et de Gestion Appliquée (FSEGA)':
            this.spinnerets = this.FSEGA;
            break;
        case 'Faculté de Génie Industriel (FGI)':
            this.spinnerets = this.FGI;
            break;
        case 'Faculté de Médecine et des Sciences pharmaceutiques (FMSP)':
            this.spinnerets = this.FMSP;
            break;
        case 'Ecole Supérieure des Sciences Economiques et Commerciales (ESSEC)':
            this.spinnerets = this.ESSEC;
            break;
        case "Ecole Normale Supérieure d'Enseignement Technique (ENSET)":
            this.spinnerets = this.ENSET;
            break;
        case 'Institut Universitaire de Technologie (IUT)':
            this.spinnerets = this.IUT;
            break;
        case 'Institut Universitaire de la Côte (IUC)':
            this.spinnerets = this.IUC;
            break;
        default:
            this.spinnerets = this.FS;
            break;
    }
}

onChange(event) {
    this.getSpinnerets(event);
    console.log(event)
  }


}