const emailTranslations = {
    lt: {
      subject: 'Gavome jūsų užklausą',
      greeting: 'Sveiki',
      receivedMessage: 'Gavome jūsų užklausą dėl apartamentų ir netrukus su jumis susisieksime.',
      yourInfo: 'Jūsų informacija',
      name: 'Vardas:',
      message: 'Žinutė:',
      viewApartments: 'Peržiūrėti apartamentus'
    },
    en: {
      subject: 'We received your inquiry',
      greeting: 'Hello',
      receivedMessage: 'We received your inquiry about apartments and will contact you soon.',
      yourInfo: 'Your information',
      name: 'Name:',
      message: 'Message:',
      viewApartments: 'View apartments'
    }
  };
  
  export function getEmailTranslations(locale) {
    return emailTranslations[locale] || emailTranslations.lt;
  }