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
    },
    ru: {
      subject: 'Мы получили ваш запрос',
      greeting: 'Здравствуйте',
      receivedMessage: 'Мы получили ваш запрос об апартаментах и свяжемся с вами в ближайшее время.',
      yourInfo: 'Ваша информация',
      name: 'Имя:',
      message: 'Сообщение:',
      viewApartments: 'Посмотреть апартаменты'
    }
  };
  
  export function getEmailTranslations(locale) {
    return emailTranslations[locale] || emailTranslations.lt;
  }