const faqData = [
  // LIVRAISON
  {
    keywords: [
      "livraison", "livrer", "livré", "livréé", "livraizon", "livraision", "envoyé", "envoyée", "colis", "paquet",
      "transport", "recevoir", "reçu", "recu", "où est mon colis", "où est ma commande", "delai livraison",
      "retard livraison", "commande livrée", "suivi colis", "suivi livraison", "colis perdu", "colis en retard",
      "date livraison", "date d'arrivée", "quand arrive mon colis", "frais de livraison", "prix livraison",
      "livraison gratuite", "livraison express", "livraison standard"
    ],
    response: "La livraison standard chez JD Sports prend généralement 3 à 5 jours ouvrables. Une fois votre commande expédiée, vous recevrez un e-mail avec un lien de suivi. La livraison express est disponible pour certaines zones et arrive sous 1 à 2 jours. Les frais de livraison varient selon la méthode choisie et le montant de votre commande. La livraison est gratuite à partir d'un certain montant."
  },

  // RETOURS
  {
    keywords: [
      "retour", "retours", "rendre", "remboursement", "rembourser", "remboursé", "renvoyer", "renvoi", "échange", "echanger",
      "changer produit", "produit défectueux", "produit abîmé", "article retourné", "délai retour", "retour gratuit",
      "frais retour", "comment retourner", "procédure retour", "faire un retour", "annuler commande"
    ],
    response: "Vous pouvez retourner vos articles sous 30 jours à condition qu'ils soient en état neuf, non portés et dans leur emballage d'origine. Le retour est gratuit en magasin JD Sports. Pour les retours par courrier, utilisez l'étiquette retour fournie ou téléchargeable depuis votre compte. Une fois le retour reçu et validé, le remboursement est effectué sous 7 à 10 jours ouvrés."
  },

  // COMMANDES
  {
    keywords: [
      "commande", "commandé", "commandee", "commandes", "achat", "acheter", "valider commande", "annuler commande",
      "modifier commande", "erreur commande", "suivi commande", "confirmation commande", "statut commande",
      "commande expédiée", "commande en préparation", "commande en cours", "facture", "numéro commande"
    ],
    response: "Une fois votre commande passée, vous recevrez un e-mail de confirmation avec le numéro de commande. Vous pouvez suivre l'état de votre commande dans votre compte JD Sports, rubrique 'Mes commandes'. Si vous souhaitez annuler ou modifier votre commande, cela est possible uniquement tant que votre commande n'est pas expédiée."
  },

  // PRODUITS
  {
    keywords: [
      "produit", "article", "taille", "stock", "disponible", "indisponible", "rupture de stock", "modèle",
      "chaussures", "baskets", "sneakers", "vêtements", "vetements", "t-shirt", "pantalon", "nike", "adidas",
      "new balance", "puma", "reebok", "taille disponible", "coloris", "couleur", "disponibilité", "réassort"
    ],
    response: "Les stocks de JD Sports sont mis à jour en temps réel sur notre site. Si un produit est en rupture de stock, vous pouvez activer une alerte par e-mail pour être informé du réapprovisionnement. Toutes les tailles et couleurs disponibles sont affichées sur la fiche produit."
  },

  // PAIEMENT
  {
    keywords: [
      "paiement", "payer", "carte", "cb", "visa", "mastercard", "paypal", "moyen de paiement",
      "refusé", "erreur paiement", "problème carte", "paiement sécurisé", "paiement en plusieurs fois",
      "carte cadeau", "voucher", "bon d'achat", "code promo", "remise"
    ],
    response: "JD Sports accepte les cartes Visa, Mastercard, American Express, ainsi que PayPal. Les paiements sont sécurisés via notre plateforme certifiée. Si votre paiement est refusé, vérifiez les informations de votre carte et les fonds disponibles, ou essayez un autre moyen de paiement. Les cartes cadeaux et codes promotionnels peuvent être utilisés lors du paiement."
  },

  // COMPTE CLIENT
  {
    keywords: [
      "compte", "connexion", "se connecter", "créer compte", "inscription", "mot de passe oublié",
      "mdp oublié", "compte bloqué", "modifier profil", "adresse", "email", "profil", "informations personnelles",
      "supprimer compte"
    ],
    response: "Vous pouvez créer un compte JD Sports pour faciliter vos achats et suivre vos commandes. En cas d'oubli de mot de passe, utilisez la fonction 'Mot de passe oublié' pour le réinitialiser. Vous pouvez également modifier vos informations personnelles dans la section 'Mon compte'."
  },

  // CARTES CADEAUX
  {
    keywords: [
      "carte cadeau", "carte cadeaux", "carte cadeu", "gift card", "code cadeau", "code promo", "utiliser carte cadeau",
      "solde carte", "offrir carte", "acheter carte cadeau", "e-carte cadeau", "bon d'achat", "voucher"
    ],
    response: "Les cartes cadeaux JD Sports sont valables en magasin et en ligne. Vous pouvez acheter une carte cadeau physique ou électronique, et vérifier son solde sur notre site. Pour utiliser une carte cadeau, saisissez le code au moment du paiement."
  },

  // SERVICE CLIENT
  {
    keywords: [
      "service client", "contact", "joindre", "aide", "assistance", "support", "réclamation",
      "plainte", "problème", "conseil", "parler à un conseiller", "téléphone service client", "mail service client"
    ],
    response: "Pour toute question ou problème, vous pouvez contacter notre service client via le formulaire en ligne, par téléphone ou sur nos réseaux sociaux. Nous nous efforçons de répondre sous 24 à 48 heures."
  },

  // PROBLÈMES TECHNIQUES
  {
    keywords: [
      "bug", "erreur", "site ne fonctionne pas", "page blanche", "chargement lent",
      "problème technique", "plantage", "application ne marche pas", "connexion impossible", "problème paiement"
    ],
    response: "Si vous rencontrez un problème technique sur notre site ou application, essayez de vider le cache de votre navigateur, utiliser un autre appareil ou navigateur, ou vérifier votre connexion internet. Si le problème persiste, contactez le support technique."
  },

  // MAGASINS
  {
    keywords: [
      "magasin", "boutique", "adresse magasin", "où est le magasin", "trouver magasin", "localiser magasin",
      "horaires magasin", "fermé", "ouvert", "point de vente", "jd près de moi", "jd sport proche"
    ],
    response: "Pour trouver le magasin JD Sports le plus proche, utilisez notre outil 'Trouver un magasin' sur le site en entrant votre ville ou code postal. Vous y trouverez les adresses et horaires d'ouverture."
  },

  // ANNULATION & MODIFICATION
  {
    keywords: [
      "annuler commande", "annulation", "modifier commande", "changer commande",
      "erreur commande", "corriger commande", "changer adresse", "changer produit"
    ],
    response: "L'annulation ou la modification d'une commande est possible uniquement avant son expédition. Rendez-vous dans votre espace client pour vérifier l'état de votre commande. Si elle est en cours de préparation, contactez rapidement le service client."
  },

  // PROMOTIONS & SOLDES
  {
    keywords: [
      "réduction", "promo", "code promo", "coupon", "offre", "soldes", "prix réduit", "remise", "bon plan",
      "promotion", "vente flash", "black friday", "cyber monday"
    ],
    response: "JD Sports propose régulièrement des promotions et soldes. Consultez la page d'accueil ou inscrivez-vous à la newsletter pour recevoir les meilleures offres. Les codes promo sont à entrer au moment du paiement."
  },

  // QUESTIONS FRÉQUENTES ET VARIANTES ORTHOGRAPHIQUES
  {
    keywords: [
      "c koi jd sports", "c'est quoi jd sports", "qui est jd sports", "jd sport", "jd sport", "jd sportss",
      "jd sprots", "jd spors", "jdspors", "jd sports france"
    ],
    response: "JD Sports est un leader international dans la vente de vêtements, chaussures et accessoires de sport et de mode urbaine, disponible en magasin et en ligne."
  },

  {
    keywords: [
      "je n'ai pas reçu ma commande", "commande pas reçue", "colis jamais reçu", "pas reçu colis", "colis perdu",
      "commande en retard", "livraison en retard", "retard colis"
    ],
    response: "Si votre commande n’est pas arrivée dans les délais, vérifiez le suivi dans votre compte. En cas de problème, contactez le service client pour assistance."
  },

  {
    keywords: [
      "remboursement pas reçu", "pas remboursé", "retard remboursement", "délai remboursement", "remboursement en attente"
    ],
    response: "Les remboursements sont traités sous 7 à 10 jours ouvrés après réception du retour. Si ce délai est dépassé, contactez le service client avec votre numéro de commande."
  },

  {
    keywords: [
      "problème avec ma commande", "commande erronée", "commande incorrecte", "article manquant", "produit cassé",
      "produit défectueux", "réclamation commande"
    ],
    response: "Nous sommes désolés pour ce problème. Veuillez contacter le service client avec votre numéro de commande et une description détaillée pour que nous puissions vous aider."
  },

  {
    keywords: [
      "je veux parler à un conseiller", "parler à quelqu'un", "contact humain", "support humain",
      "aide d'un conseiller", "service après-vente"
    ],
    response: "Pour parler à un conseiller JD Sports, contactez notre service client via téléphone ou chat en ligne aux horaires indiqués sur notre site."
  },

  // EXEMPLES D'ORTHOGRAPHE COURANTE & FAUTES
  {
    keywords: [
      "livraison en retart", "retouner produit", "rembourcsement", "commande pas recu",
      "probleme paiment", "payer en plusieurs fois", "modifer commande", "connexion impossible",
      "cree compte", "oublié mot de passe", "oublier mot de passe", "mot de passe oublier"
    ],
    response: "Je pense que vous souhaitez parler de la livraison, du retour, du remboursement ou d'autres services JD Sports. Pouvez-vous reformuler votre question pour que je puisse mieux vous aider ?"
  },

  // QUESTIONS SUR LES SIZES
  {
    keywords: [
      "quelle taille choisir", "guide des tailles", "taille correspondance", "taille chaussures", "taille vêtements",
      "conseil taille", "taille trop petite", "taille trop grande"
    ],
    response: "Vous pouvez consulter notre guide des tailles sur chaque fiche produit pour vous aider à choisir la taille adaptée. Si la taille ne convient pas, vous pouvez effectuer un retour ou un échange sous 30 jours."
  },

  // QUESTIONS SUR LE PAIEMENT EN PLUSIEURS FOIS
  {
    keywords: [
      "paiement en plusieurs fois", "payer en 3 fois", "paiement échelonné", "facilité paiement", "paiement différé"
    ],
    response: "JD Sports propose parfois des options de paiement en plusieurs fois via des partenaires spécialisés. Cette option est visible au moment du paiement si elle est disponible pour votre commande."
  },

  // QUESTIONS SUR LES CARTES CADEAUX
  {
    keywords: [
      "carte cadeau perdue", "perdu code carte cadeau", "comment utiliser carte cadeau", "carte cadeau expirée",
      "problème carte cadeau", "solde carte cadeau", "recharger carte cadeau"
    ],
    response: "En cas de perte ou problème avec votre carte cadeau, contactez le service client avec le numéro de votre carte ou votre preuve d'achat. Les cartes cadeaux ne sont généralement pas rechargeables et ont une durée de validité limitée."
  },

  // QUESTIONS SUR LE PROGRAMME DE FIDÉLITÉ
  {
    keywords: [
      "programme fidélité", "points fidélité", "récompenses", "avantages fidélité", "carte fidélité",
      "comment gagner des points", "cumul points"
    ],
    response: "JD Sports propose un programme de fidélité permettant de cumuler des points à chaque achat. Ces points peuvent être échangés contre des réductions. Inscrivez-vous à la newsletter pour ne rien manquer."
  },

  // QUESTIONS SUR LA GARANTIE DES PRODUITS
  {
    keywords: [
      "garantie", "garantie produit", "produit défectueux", "service après-vente", "sav",
      "réparation", "remplacement produit"
    ],
    response: "Les produits JD Sports bénéficient d'une garantie fabricant. En cas de défaut ou problème, contactez notre service après-vente avec votre preuve d'achat."
  }
];