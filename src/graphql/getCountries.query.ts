import {gql} from '@apollo/client';

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      currency
      name
      continent {
        name
      }
      languages {
        name
      }
      states {
        name
      }
      emojiU
      emoji
    }
  }
`;

export default GET_COUNTRIES;
