interface IAuthors {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAuthorAddress;
  phone: string;
  website: string;
  company: IAuthorCompany;
}

interface IAuthorAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface IAuthorCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export default IAuthors;
