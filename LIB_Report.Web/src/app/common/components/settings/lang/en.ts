export const locale = {
  lang: 'en',
  data: {
    settings: {
      commands: {
        Save: 'Save',
        Cancel: 'Cancel',
        Close: 'Close',
      },
      Fields: {
        Email: 'E-Mail',
        PhoneNumber: 'Mobile Phone',
        Language: 'Language',
        UserName: 'Username',
      },
      Labels: {
        AmharicLanguage: 'Amharic',
        EnglishLanguage: 'English',
        OromifaLanguage: 'Afaan Oromoo'
      },

      ValidationError: {
        InvalidEmail: 'Enter valid Email ',
        Required: 'This field is required',
        EmailRequired: 'Email address is required (maximum of 200 characters)',
        UserNameRequired: 'User name is required (minimum of 2 and maximum of 200 characters)',
        PhoneRequired: 'Phone is required (10 digits)',
        MinLengthChar: 'Must be at least {{min}} characters long',
        MaxLengthChar: 'Can not exceed {{max}} charcters',
        MinLengthNum: 'Must be at least {{min}} digits',
        MaxLengthNum: 'Can not exceed {{max}} digits',
        UseLatinOnly: 'Use Latin character only',
        UseEthiopicOnly: 'Use Ethiopic characters  only',
        UseCharacterOnly: 'Use characters only',
        NumberOnly: 'Enter number only!',
        EnterValidPhoneNumberOnly: 'Enter valid phone number only!',
      },
      messages: {
        Saved: 'Data was saved successfully',
        SaveError: 'Record Not Saved!',
        SettingsChange: 'In order for the changes to take effect, you need to  sign in again'

      }
    },
    pageHeader: {
      Settings: 'Settings',
    },

  }
};
