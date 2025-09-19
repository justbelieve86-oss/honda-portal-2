import { turkishCitiesPart1 } from './tr-cities-part1';
import { turkishCitiesPart2 } from './tr-cities-part2';
import { turkishCitiesPart3 } from './tr-cities-part3';
import { turkishCitiesPart4 } from './tr-cities-part4';

// Türkiye illeri ve ilçeleri
export interface District {
  id: number;
  name: string;
}

export interface City {
  id: number;
  name: string;
  districts: District[];
}

// Combine all city parts into a single array
export const turkishCities: City[] = [
  ...turkishCitiesPart1,
  ...turkishCitiesPart2,
  ...turkishCitiesPart3,
  ...turkishCitiesPart4
];

// İl seçimi için yardımcı fonksiyon
export const getCityNameById = (cityId: number): string => {
  const city = turkishCities.find(city => city.id === cityId);
  return city ? city.name : '';
};

// İlçe seçimi için yardımcı fonksiyon
export const getDistrictNameById = (cityId: number, districtId: number): string => {
  const city = turkishCities.find(city => city.id === cityId);
  if (!city) return '';
  
  const district = city.districts.find(district => district.id === districtId);
  return district ? district.name : '';
};

// Bir ilin tüm ilçelerini getiren fonksiyon
export const getDistrictsByCity = (cityId: number): District[] => {
  const city = turkishCities.find(city => city.id === cityId);
  return city ? city.districts : [];
};

/**
 * Sort cities alphabetically and return them
 * @returns Alphabetically sorted array of cities
 */
export const getSortedCities = (): City[] => {
  return [...turkishCities].sort((a, b) => a.name.localeCompare(b.name));
};

/**
 * Sort districts alphabetically for a given city
 * @param cityId The ID of the city
 * @returns Alphabetically sorted array of districts
 */
export const getSortedDistricts = (cityId: number): District[] => {
  const districts = getDistrictsByCity(cityId);
  return [...districts].sort((a, b) => a.name.localeCompare(b.name));
}; 