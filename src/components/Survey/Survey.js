import React, { useState } from "react";
import "./Survey.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import Autocomplete from "@mui/material/Autocomplete";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Survey = (props) => {
  const { SetSurvey, survey } = props;
  console.log("your  in sevary", props);
  const [formData, setFormData] = useState({ gender: "male" });

  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    {
      label: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { label: "The Good, the Bad and the Ugly", year: 1966 },
    { label: "Fight Club", year: 1999 },
    {
      label: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
    {
      label: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
    },
    { label: "Forrest Gump", year: 1994 },
    { label: "Inception", year: 2010 },
    {
      label: "The Lord of the Rings: The Two Towers",
      year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: "Goodfellas", year: 1990 },
    { label: "The Matrix", year: 1999 },
    { label: "Seven Samurai", year: 1954 },
    {
      label: "Star Wars: Episode IV - A New Hope",
      year: 1977,
    },
    { label: "City of God", year: 2002 },
    { label: "Se7en", year: 1995 },
    { label: "The Silence of the Lambs", year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: "Life Is Beautiful", year: 1997 },
    { label: "The Usual Suspects", year: 1995 },
    { label: "Léon: The Professional", year: 1994 },
    { label: "Spirited Away", year: 2001 },
    { label: "Saving Private Ryan", year: 1998 },
    { label: "Once Upon a Time in the West", year: 1968 },
    { label: "American History X", year: 1998 },
    { label: "Interstellar", year: 2014 },
    { label: "Casablanca", year: 1942 },
    { label: "City Lights", year: 1931 },
    { label: "Psycho", year: 1960 },
    { label: "The Green Mile", year: 1999 },
    { label: "The Intouchables", year: 2011 },
    { label: "Modern Times", year: 1936 },
    { label: "Raiders of the Lost Ark", year: 1981 },
    { label: "Rear Window", year: 1954 },
    { label: "The Pianist", year: 2002 },
    { label: "The Departed", year: 2006 },
    { label: "Terminator 2: Judgment Day", year: 1991 },
    { label: "Back to the Future", year: 1985 },
    { label: "Whiplash", year: 2014 },
    { label: "Gladiator", year: 2000 },
    { label: "Memento", year: 2000 },
    { label: "The Prestige", year: 2006 },
    { label: "The Lion King", year: 1994 },
    { label: "Apocalypse Now", year: 1979 },
    { label: "Alien", year: 1979 },
    { label: "Sunset Boulevard", year: 1950 },
    {
      label:
        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      year: 1964,
    },
    { label: "The Great Dictator", year: 1940 },
    { label: "Cinema Paradiso", year: 1988 },
    { label: "The Lives of Others", year: 2006 },
    { label: "Grave of the Fireflies", year: 1988 },
    { label: "Paths of Glory", year: 1957 },
    { label: "Django Unchained", year: 2012 },
    { label: "The Shining", year: 1980 },
    { label: "WALL·E", year: 2008 },
    { label: "American Beauty", year: 1999 },
    { label: "The Dark Knight Rises", year: 2012 },
    { label: "Princess Mononoke", year: 1997 },
    { label: "Aliens", year: 1986 },
    { label: "Oldboy", year: 2003 },
    { label: "Once Upon a Time in America", year: 1984 },
    { label: "Witness for the Prosecution", year: 1957 },
    { label: "Das Boot", year: 1981 },
    { label: "Citizen Kane", year: 1941 },
    { label: "North by Northwest", year: 1959 },
    { label: "Vertigo", year: 1958 },
    {
      label: "Star Wars: Episode VI - Return of the Jedi",
      year: 1983,
    },
    { label: "Reservoir Dogs", year: 1992 },
    { label: "Braveheart", year: 1995 },
    { label: "M", year: 1931 },
    { label: "Requiem for a Dream", year: 2000 },
    { label: "Amélie", year: 2001 },
    { label: "A Clockwork Orange", year: 1971 },
    { label: "Like Stars on Earth", year: 2007 },
    { label: "Taxi Driver", year: 1976 },
    { label: "Lawrence of Arabia", year: 1962 },
    { label: "Double Indemnity", year: 1944 },
    {
      label: "Eternal Sunshine of the Spotless Mind",
      year: 2004,
    },
    { label: "Amadeus", year: 1984 },
    { label: "To Kill a Mockingbird", year: 1962 },
    { label: "Toy Story 3", year: 2010 },
    { label: "Logan", year: 2017 },
    { label: "Full Metal Jacket", year: 1987 },
    { label: "Dangal", year: 2016 },
    { label: "The Sting", year: 1973 },
    { label: "2001: A Space Odyssey", year: 1968 },
    { label: "Singin' in the Rain", year: 1952 },
    { label: "Toy Story", year: 1995 },
    { label: "Bicycle Thieves", year: 1948 },
    { label: "The Kid", year: 1921 },
    { label: "Inglourious Basterds", year: 2009 },
    { label: "Snatch", year: 2000 },
    { label: "3 Idiots", year: 2009 },
    { label: "Monty Python and the Holy Grail", year: 1975 },
  ];



  const country= [ 
    {label: 'Afghanistan', code: 'AF'}, 
    {label: 'Åland Islands', code: 'AX'}, 
    {label: 'Albania', code: 'AL'}, 
    {label: 'Algeria', code: 'DZ'}, 
    {label: 'American Samoa', code: 'AS'}, 
    {label: 'AndorrA', code: 'AD'}, 
    {label: 'Angola', code: 'AO'}, 
    {label: 'Anguilla', code: 'AI'}, 
    {label: 'Antarctica', code: 'AQ'}, 
    {label: 'Antigua and Barbuda', code: 'AG'}, 
    {label: 'Argentina', code: 'AR'}, 
    {label: 'Armenia', code: 'AM'}, 
    {label: 'Aruba', code: 'AW'}, 
    {label: 'Australia', code: 'AU'}, 
    {label: 'Austria', code: 'AT'}, 
    {label: 'Azerbaijan', code: 'AZ'}, 
    {label: 'Bahamas', code: 'BS'}, 
    {label: 'Bahrain', code: 'BH'}, 
    {label: 'Bangladesh', code: 'BD'}, 
    {label: 'Barbados', code: 'BB'}, 
    {label: 'Belarus', code: 'BY'}, 
    {label: 'Belgium', code: 'BE'}, 
    {label: 'Belize', code: 'BZ'}, 
    {label: 'Benin', code: 'BJ'}, 
    {label: 'Bermuda', code: 'BM'}, 
    {label: 'Bhutan', code: 'BT'}, 
    {label: 'Bolivia', code: 'BO'}, 
    {label: 'Bosnia and Herzegovina', code: 'BA'}, 
    {label: 'Botswana', code: 'BW'}, 
    {label: 'Bouvet Island', code: 'BV'}, 
    {label: 'Brazil', code: 'BR'}, 
    {label: 'British Indian Ocean Territory', code: 'IO'}, 
    {label: 'Brunei Darussalam', code: 'BN'}, 
    {label: 'Bulgaria', code: 'BG'}, 
    {label: 'Burkina Faso', code: 'BF'}, 
    {label: 'Burundi', code: 'BI'}, 
    {label: 'Cambodia', code: 'KH'}, 
    {label: 'Cameroon', code: 'CM'}, 
    {label: 'Canada', code: 'CA'}, 
    {label: 'Cape Verde', code: 'CV'}, 
    {label: 'Cayman Islands', code: 'KY'}, 
    {label: 'Central African Republic', code: 'CF'}, 
    {label: 'Chad', code: 'TD'}, 
    {label: 'Chile', code: 'CL'}, 
    {label: 'China', code: 'CN'}, 
    {label: 'Christmas Island', code: 'CX'}, 
    {label: 'Cocos (Keeling) Islands', code: 'CC'}, 
    {label: 'Colombia', code: 'CO'}, 
    {label: 'Comoros', code: 'KM'}, 
    {label: 'Congo', code: 'CG'}, 
    {label: 'Congo, The Democratic Republic of the', code: 'CD'}, 
    {label: 'Cook Islands', code: 'CK'}, 
    {label: 'Costa Rica', code: 'CR'}, 
    {label: 'Cote D\'Ivoire', code: 'CI'}, 
    {label: 'Croatia', code: 'HR'}, 
    {label: 'Cuba', code: 'CU'}, 
    {label: 'Cyprus', code: 'CY'}, 
    {label: 'Czech Republic', code: 'CZ'}, 
    {label: 'Denmark', code: 'DK'}, 
    {label: 'Djibouti', code: 'DJ'}, 
    {label: 'Dominica', code: 'DM'}, 
    {label: 'Dominican Republic', code: 'DO'}, 
    {label: 'Ecuador', code: 'EC'}, 
    {label: 'Egypt', code: 'EG'}, 
    {label: 'El Salvador', code: 'SV'}, 
    {label: 'Equatorial Guinea', code: 'GQ'}, 
    {label: 'Eritrea', code: 'ER'}, 
    {label: 'Estonia', code: 'EE'}, 
    {label: 'Ethiopia', code: 'ET'}, 
    {label: 'Falkland Islands (Malvinas)', code: 'FK'}, 
    {label: 'Faroe Islands', code: 'FO'}, 
    {label: 'Fiji', code: 'FJ'}, 
    {label: 'Finland', code: 'FI'}, 
    {label: 'France', code: 'FR'}, 
    {label: 'French Guiana', code: 'GF'}, 
    {label: 'French Polynesia', code: 'PF'}, 
    {label: 'French Southern Territories', code: 'TF'}, 
    {label: 'Gabon', code: 'GA'}, 
    {label: 'Gambia', code: 'GM'}, 
    {label: 'Georgia', code: 'GE'}, 
    {label: 'Germany', code: 'DE'}, 
    {label: 'Ghana', code: 'GH'}, 
    {label: 'Gibraltar', code: 'GI'}, 
    {label: 'Greece', code: 'GR'}, 
    {label: 'Greenland', code: 'GL'}, 
    {label: 'Grenada', code: 'GD'}, 
    {label: 'Guadeloupe', code: 'GP'}, 
    {label: 'Guam', code: 'GU'}, 
    {label: 'Guatemala', code: 'GT'}, 
    {label: 'Guernsey', code: 'GG'}, 
    {label: 'Guinea', code: 'GN'}, 
    {label: 'Guinea-Bissau', code: 'GW'}, 
    {label: 'Guyana', code: 'GY'}, 
    {label: 'Haiti', code: 'HT'}, 
    {label: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
    {label: 'Holy See (Vatican City State)', code: 'VA'}, 
    {label: 'Honduras', code: 'HN'}, 
    {label: 'Hong Kong', code: 'HK'}, 
    {label: 'Hungary', code: 'HU'}, 
    {label: 'Iceland', code: 'IS'}, 
    {label: 'India', code: 'IN'}, 
    {label: 'Indonesia', code: 'ID'}, 
    {label: 'Iran, Islamic Republic Of', code: 'IR'}, 
    {label: 'Iraq', code: 'IQ'}, 
    {label: 'Ireland', code: 'IE'}, 
    {label: 'Isle of Man', code: 'IM'}, 
    {label: 'Israel', code: 'IL'}, 
    {label: 'Italy', code: 'IT'}, 
    {label: 'Jamaica', code: 'JM'}, 
    {label: 'Japan', code: 'JP'}, 
    {label: 'Jersey', code: 'JE'}, 
    {label: 'Jordan', code: 'JO'}, 
    {label: 'Kazakhstan', code: 'KZ'}, 
    {label: 'Kenya', code: 'KE'}, 
    {label: 'Kiribati', code: 'KI'}, 
    {label: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
    {label: 'Korea, Republic of', code: 'KR'}, 
    {label: 'Kuwait', code: 'KW'}, 
    {label: 'Kyrgyzstan', code: 'KG'}, 
    {label: 'Lao People\'S Democratic Republic', code: 'LA'}, 
    {label: 'Latvia', code: 'LV'}, 
    {label: 'Lebanon', code: 'LB'}, 
    {label: 'Lesotho', code: 'LS'}, 
    {label: 'Liberia', code: 'LR'}, 
    {label: 'Libyan Arab Jamahiriya', code: 'LY'}, 
    {label: 'Liechtenstein', code: 'LI'}, 
    {label: 'Lithuania', code: 'LT'}, 
    {label: 'Luxembourg', code: 'LU'}, 
    {label: 'Macao', code: 'MO'}, 
    {label: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
    {label: 'Madagascar', code: 'MG'}, 
    {label: 'Malawi', code: 'MW'}, 
    {label: 'Malaysia', code: 'MY'}, 
    {label: 'Maldives', code: 'MV'}, 
    {label: 'Mali', code: 'ML'}, 
    {label: 'Malta', code: 'MT'}, 
    {label: 'Marshall Islands', code: 'MH'}, 
    {label: 'Martinique', code: 'MQ'}, 
    {label: 'Mauritania', code: 'MR'}, 
    {label: 'Mauritius', code: 'MU'}, 
    {label: 'Mayotte', code: 'YT'}, 
    {label: 'Mexico', code: 'MX'}, 
    {label: 'Micronesia, Federated States of', code: 'FM'}, 
    {label: 'Moldova, Republic of', code: 'MD'}, 
    {label: 'Monaco', code: 'MC'}, 
    {label: 'Mongolia', code: 'MN'}, 
    {label: 'Montserrat', code: 'MS'}, 
    {label: 'Morocco', code: 'MA'}, 
    {label: 'Mozambique', code: 'MZ'}, 
    {label: 'Myanmar', code: 'MM'}, 
    {label: 'Namibia', code: 'NA'}, 
    {label: 'Nauru', code: 'NR'}, 
    {label: 'Nepal', code: 'NP'}, 
    {label: 'Netherlands', code: 'NL'}, 
    {label: 'Netherlands Antilles', code: 'AN'}, 
    {label: 'New Caledonia', code: 'NC'}, 
    {label: 'New Zealand', code: 'NZ'}, 
    {label: 'Nicaragua', code: 'NI'}, 
    {label: 'Niger', code: 'NE'}, 
    {label: 'Nigeria', code: 'NG'}, 
    {label: 'Niue', code: 'NU'}, 
    {label: 'Norfolk Island', code: 'NF'}, 
    {label: 'Northern Mariana Islands', code: 'MP'}, 
    {label: 'Norway', code: 'NO'}, 
    {label: 'Oman', code: 'OM'}, 
    {label: 'Pakistan', code: 'PK'}, 
    {label: 'Palau', code: 'PW'}, 
    {label: 'Palestinian Territory, Occupied', code: 'PS'}, 
    {label: 'Panama', code: 'PA'}, 
    {label: 'Papua New Guinea', code: 'PG'}, 
    {label: 'Paraguay', code: 'PY'}, 
    {label: 'Peru', code: 'PE'}, 
    {label: 'Philippines', code: 'PH'}, 
    {label: 'Pitcairn', code: 'PN'}, 
    {label: 'Poland', code: 'PL'}, 
    {label: 'Portugal', code: 'PT'}, 
    {label: 'Puerto Rico', code: 'PR'}, 
    {label: 'Qatar', code: 'QA'}, 
    {label: 'Reunion', code: 'RE'}, 
    {label: 'Romania', code: 'RO'}, 
    {label: 'Russian Federation', code: 'RU'}, 
    {label: 'RWANDA', code: 'RW'}, 
    {label: 'Saint Helena', code: 'SH'}, 
    {label: 'Saint Kitts and Nevis', code: 'KN'}, 
    {label: 'Saint Lucia', code: 'LC'}, 
    {label: 'Saint Pierre and Miquelon', code: 'PM'}, 
    {label: 'Saint Vincent and the Grenadines', code: 'VC'}, 
    {label: 'Samoa', code: 'WS'}, 
    {label: 'San Marino', code: 'SM'}, 
    {label: 'Sao Tome and Principe', code: 'ST'}, 
    {label: 'Saudi Arabia', code: 'SA'}, 
    {label: 'Senegal', code: 'SN'}, 
    {label: 'Serbia and Montenegro', code: 'CS'}, 
    {label: 'Seychelles', code: 'SC'}, 
    {label: 'Sierra Leone', code: 'SL'}, 
    {label: 'Singapore', code: 'SG'}, 
    {label: 'Slovakia', code: 'SK'}, 
    {label: 'Slovenia', code: 'SI'}, 
    {label: 'Solomon Islands', code: 'SB'}, 
    {label: 'Somalia', code: 'SO'}, 
    {label: 'South Africa', code: 'ZA'}, 
    {label: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
    {label: 'Spain', code: 'ES'}, 
    {label: 'Sri Lanka', code: 'LK'}, 
    {label: 'Sudan', code: 'SD'}, 
    {label: 'Surilabel', code: 'SR'}, 
    {label: 'Svalbard and Jan Mayen', code: 'SJ'}, 
    {label: 'Swaziland', code: 'SZ'}, 
    {label: 'Sweden', code: 'SE'}, 
    {label: 'Switzerland', code: 'CH'}, 
    {label: 'Syrian Arab Republic', code: 'SY'}, 
    {label: 'Taiwan, Province of China', code: 'TW'}, 
    {label: 'Tajikistan', code: 'TJ'}, 
    {label: 'Tanzania, United Republic of', code: 'TZ'}, 
    {label: 'Thailand', code: 'TH'}, 
    {label: 'Timor-Leste', code: 'TL'}, 
    {label: 'Togo', code: 'TG'}, 
    {label: 'Tokelau', code: 'TK'}, 
    {label: 'Tonga', code: 'TO'}, 
    {label: 'Trinidad and Tobago', code: 'TT'}, 
    {label: 'Tunisia', code: 'TN'}, 
    {label: 'Turkey', code: 'TR'}, 
    {label: 'Turkmenistan', code: 'TM'}, 
    {label: 'Turks and Caicos Islands', code: 'TC'}, 
    {label: 'Tuvalu', code: 'TV'}, 
    {label: 'Uganda', code: 'UG'}, 
    {label: 'Ukraine', code: 'UA'}, 
    {label: 'United Arab Emirates', code: 'AE'}, 
    {label: 'United Kingdom', code: 'GB'}, 
    {label: 'United States', code: 'US'}, 
    {label: 'United States Minor Outlying Islands', code: 'UM'}, 
    {label: 'Uruguay', code: 'UY'}, 
    {label: 'Uzbekistan', code: 'UZ'}, 
    {label: 'Vanuatu', code: 'VU'}, 
    {label: 'Venezuela', code: 'VE'}, 
    {label: 'Viet Nam', code: 'VN'}, 
    {label: 'Virgin Islands, British', code: 'VG'}, 
    {label: 'Virgin Islands, U.S.', code: 'VI'}, 
    {label: 'Wallis and Futuna', code: 'WF'}, 
    {label: 'Western Sahara', code: 'EH'}, 
    {label: 'Yemen', code: 'YE'}, 
    {label: 'Zambia', code: 'ZM'}, 
    {label: 'Zimbabwe', code: 'ZW'} 
  ]
























  function handleChange(e) {
    var name = e.target.name;
    var value = e.target.value;
    console.log("your change is");
    setFormData({ ...formData, [name]: value });
    console.log("your formData", formData);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("submit is called");

    try {
      const response = await axios.post(
        "https://survey-rbq3.onrender.com/api/v1/survey/new",
        { ...formData }
      );
      console.log("your reponse after making survey", response.data);
      SetSurvey([...survey, { ...response.data.survey }]);
      setFormData({
        name: "",
        email: "",
        nationality: "",
        message: "",
        address: "",
        phone: "",
      });
      toast("Successfully submited");
    } catch (error) {
      console.log("your error in creatine survey", error);
      toast(error.message);
    }
    console.log("your form data is ready to submit", formData);
  }

  return (
    <div id="survey">
      <div className="container">
        <form action="" className="" onSubmit={(e) => handleSubmit(e)}>
          <h3 className="">Thank Helping Us</h3>
          <div className="row bg-light">
            <div className="col-12 my-2">
              <h4 className="m-0">Details</h4>
            </div>
            <div className="col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <Box fontWeight={700}>
                    <TextField
                      id="outlined-basic"
                      fullWidth={true}
                      label="Name"
                      variant="outlined"
                      name="name"
                      value={formData.name}
                      sx={{ fontSize: "30px" }}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </Box>
                </div>
                <div className="col-6">
                  <Box fontWeight={700}>
                    <TextField
                      id="outlined-basic"
                      fullWidth={true}
                      label="@gmail.com"
                      variant="outlined"
                      name="email"
                      value={formData.email}
                      sx={{ fontSize: "30px" }}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </Box>
                </div>
              </div>
            </div>
            <div className="col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <Box>
                    <TextField
                      id="outlined-basic"
                      fullWidth={true}
                      label="phone"
                      variant="outlined"
                      name="phone"
                      type="number"
                      value={formData.phone}
                      sx={{ fontSize: "30px" }}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </Box>
                </div>
                <div className="col-6">
                  {/* <Box>
                    <TextField
                          id="outlined-basic"
                          fullWidth={true}
                          label="Nationality"
                          variant="outlined"
                          name="nationality"
                          value={formData.nationality}
                          sx={{fontSize:'30px'}}
                         onChange={(e)=>handleChange(e)}
                         required
                    />
                  </Box> */}

                  <Box>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={country}
                      onChange={(event,value)=>{setFormData({...formData,nationality: value?value.label:""})}}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Nationality"
                          name="nationality"
                          value={formData.nationality}
                          sx={{ fontSize: "30px" }}
                         
                        />
                      )}
                    />
                  </Box>
                </div>
              </div>
            </div>
            <div className="col-12 my-2">
              <div className="row">
                <div className="col-12">
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Gender
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="gender"
                      defaultValue="male"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className="col-12 my-2">
              <Box>
                <TextField
                  id="outlined-basic"
                  fullWidth={true}
                  label="Address"
                  variant="outlined"
                  name="address"
                  value={formData.address}
                  sx={{ fontSize: "30px" }}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </Box>
            </div>
            <div className="col-12 my-2">
              <Box>
                <TextField
                  id="outlined-basic"
                  fullWidth={true}
                  label="Message"
                  variant="outlined"
                  name="message"
                  value={formData.message}
                  sx={{ fontSize: "30px" }}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </Box>
            </div>

            <div className="col-12 my-2">
              <Button type="submit" fullWidth={true} variant="contained">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Survey;
