import React, { useEffect, useState } from 'react';
import { MhahPanchang } from 'mhah-panchang';

const PanchangCalculator = () => {
  const [panchangDetails, setPanchangDetails] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [error, setError] = useState(null);
  const [previousDayNakshatras, setPreviousDayNakshatras] = useState([]);
  const [nextDayNakshatras, setNextDayNakshatras] = useState([]);
  const [previousDayTithis, setPreviousDayTithis] = useState([]);
  const [nextDayTithis, setNextDayTithis] = useState([]);
  const [previousDayKaranas, setPreviousDayKaranas] = useState([]);
  const [nextDayKaranas, setNextDayKaranas] = useState([]);
  const [previousDayYogas, setPreviousDayYogas] = useState([]);
  const [nextDayYogas, setNextDayYogas] = useState([]);

  useEffect(() => {
    const fetchPanchangDetails = async (date) => {
      const panchangObj = new MhahPanchang();
      const details = await panchangObj.calculate(date);
      return details;
    };

    const fetchSunTimes = async (date) => {
      const panchangObj = new MhahPanchang();
      const lat = 12.972;  // Latitude for Chennai
      const lon = 77.594;  // Longitude for Chennai
      const times = panchangObj.sunTimer(date, lat, lon);
      console.log(times);
      return times;
    };

    const calculatePanchang = async () => {
      try {
        const currentDate = new Date();
        const currentDateDetails = await fetchPanchangDetails(currentDate);
        const currentSunTimes = await fetchSunTimes(currentDate);

        const prevDate = new Date();
        prevDate.setDate(prevDate.getDate() - 1);
        const prevDateDetails = await fetchPanchangDetails(prevDate);

        const nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + 1);
        const nextDateDetails = await fetchPanchangDetails(nextDate);

        setPanchangDetails(currentDateDetails);
        setSunrise(currentSunTimes.sunRise);
        setSunset(currentSunTimes.sunSet);

        setPreviousDayNakshatras(prevDateDetails.Nakshatra ? [prevDateDetails.Nakshatra] : []);
        setNextDayNakshatras(nextDateDetails.Nakshatra ? [nextDateDetails.Nakshatra] : []);
        setPreviousDayTithis(prevDateDetails.Tithi ? [prevDateDetails.Tithi] : []);
        setNextDayTithis(nextDateDetails.Tithi ? [nextDateDetails.Tithi] : []);
        setPreviousDayKaranas(prevDateDetails.Karna ? [prevDateDetails.Karna] : []);
        setNextDayKaranas(nextDateDetails.Karna ? [nextDateDetails.Karna] : []);
        setPreviousDayYogas(prevDateDetails.Yoga ? [prevDateDetails.Yoga] : []);
        setNextDayYogas(nextDateDetails.Yoga ? [nextDateDetails.Yoga] : []);
      } catch (err) {
        setError(err.message);
      }
    };

    calculatePanchang();
  }, []);

  if (error) {
    return <div>Error calculating Panchangam: {error}</div>;
  }

  if (!panchangDetails) {
    return <div>Loading...</div>;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: true 
    };
    return date.toLocaleDateString("en-GB", options);
  };

  const nakshatraLord = {
    "Ashwini": "Ketu",
    "Bharani": "Venus",
    "Krittika": "Sun",
    "Rohini": "Moon",
    "Mrigashira": "Mars",
    "Ardra": "Rahu",
    "Punarvasu": "Jupiter",
    "Pushya": "Saturn",
    "Ashlesha": "Mercury",
    "Magha": "Ketu",
    "Purva Phalguni": "Venus",
    "Uttara Phalguni": "Sun",
    "Hasta": "Moon",
    "Chitra": "Mars",
    "Swati": "Rahu",
    "Visakha": "Jupiter",
    "Anuradha": "Saturn",
    "Jyeshtha": "Mercury",
    "Mula": "Ketu",
    "Purva Ashadha": "Venus",
    "Uttara Ashadha": "Sun",
    "Shravana": "Moon",
    "Dhanishta": "Mars",
    "Shatabhisha": "Rahu",
    "Purva Bhadrapada": "Jupiter",
    "Uttara Bhadrapada": "Saturn",
    "Revati": "Mercury"  // Correct spelling
  };

  const nakshatraCorrection = {
    "Rebati": "Revati",
  };

  const currentDate = new Date();

  // Utility functions to check if a date is within today
  const isDateInTodayRange = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const todayStart = new Date(currentDate.setHours(0, 0, 0, 0));
    const todayEnd = new Date(currentDate.setHours(23, 59, 59, 999));
    return (startDate <= todayEnd && endDate >= todayStart);
  };

  const filterNakshatrasForToday = (nakshatras) => {
    return nakshatras.filter(nakshatra => isDateInTodayRange(nakshatra.start, nakshatra.end));
  };

  const filterTithisForToday = (tithis) => {
    return tithis.filter(tithi => isDateInTodayRange(tithi.start, tithi.end));
  };

  const filterKaranasForToday = (karanas) => {
    return karanas.filter(karana => isDateInTodayRange(karana.start, karana.end));
  };

  const filterYogasForToday = (yogas) => {
    return yogas.filter(yoga => isDateInTodayRange(yoga.start, yoga.end));
  };

  const currentNakshatra = panchangDetails.Nakshatra ? [panchangDetails.Nakshatra] : [];
  const allNakshatras = [
    ...filterNakshatrasForToday(previousDayNakshatras),
    ...filterNakshatrasForToday(currentNakshatra),
    ...filterNakshatrasForToday(nextDayNakshatras),
  ];

  const currentTithi = panchangDetails.Tithi || {};
  const allTithis = [
    ...filterTithisForToday(previousDayTithis),
    currentTithi,
    ...filterTithisForToday(nextDayTithis),
  ].filter(tithi => tithi); // Remove null or undefined values

  const currentKarana = panchangDetails.Karna || {};
  const allKaranas = [
    ...filterKaranasForToday(previousDayKaranas),
    currentKarana,
    ...filterKaranasForToday(nextDayKaranas),
  ].filter(karana => karana); // Remove null or undefined values

  const currentYoga = panchangDetails.Yoga || {};
  const allYogas = [
    ...filterYogasForToday(previousDayYogas),
    currentYoga,
    ...filterYogasForToday(nextDayYogas),
  ].filter(yoga => yoga); // Remove null or undefined values

  const renderNakshatras = (nakshatras) => {
    return nakshatras.map((nakshatra, index) => (
      <p key={index}>
        {nakshatraCorrection[nakshatra.name_en_IN] || nakshatra.name_en_IN} (Lord: {nakshatraLord[nakshatraCorrection[nakshatra.name_en_IN] || nakshatra.name_en_IN] || "Not available"}) : {formatDate(nakshatra.start)} - {formatDate(nakshatra.end)}
      </p>
    ));
  };

  const renderTithis = (tithis) => {
    return tithis.map((tithi, index) => (
      <p key={index}>
        {tithi.name_en_IN} : {formatDate(tithi.start)} - {formatDate(tithi.end)}
      </p>
    ));
  };

  const renderKaranas = (karanas) => {
    return karanas.map((karana, index) => (
      <p key={index}>
        {karana.name_en_IN} : {formatDate(karana.start)} - {formatDate(karana.end)}
      </p>
    ));
  };

  const renderYogas = (yogas) => {
    return yogas.map((yoga, index) => (
      <p key={index}>
        {yoga.name_en_IN} : {formatDate(yoga.start)} - {formatDate(yoga.end)}
      </p>
    ));
  };

  return (
    <div>
      <h1>Today Tamil Panchangam</h1>
      <p><strong>Present Date:</strong> {new Date().toLocaleDateString("en-GB")}</p>
      <p><strong>Sunrise:</strong> {sunrise ? formatDate(sunrise) : "N/A"}</p>
      <p><strong>Sunset:</strong> {sunset ? formatDate(sunset) : "N/A"}</p>

      <h2>Nakshatras</h2>
      {renderNakshatras(allNakshatras)}

      <h2>Tithis</h2>
      {renderTithis(allTithis)}

      <h2>Karanas</h2>
      {renderKaranas(allKaranas)}

      <h2>Yogas</h2>
      {renderYogas(allYogas)}
    </div>
  );
};

export default PanchangCalculator;
