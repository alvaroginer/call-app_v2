import { UserData } from "../components/userCard/UserCard";

export const calculateGeneralRating = ({ person }: { person: UserData }) => {
  // Calculamos el Mail Rating
  const emailValue =
    person.emails.sent * 0.1 +
    person.emails.open * 0.2 +
    person.emails.clicked * 0.3 +
    person.emails.openRate * 0.2 +
    person.emails.block * -0.1 +
    person.emails.rebound * -0.1;
  const emailRating = ((emailValue / 2) * 5) / 10;
  person.emails.rating = emailRating;

  //Calculamos el Call Rating
  const callsRating = [];
  let totalCallsRating = 0;
  if (person.calls.length > 0) {
    person.calls.forEach((call) => {
      const callRate =
        call.customerInterest * 0.2 +
        call.objectionsRaised * 0.15 +
        call.conversionPotential * 0.2 +
        call.callClosure * 0.2 +
        call.callDuration * 0.1 +
        call.technicalQuality * 0.15;
      callsRating.push(callRate);
      call.callRating = callRate.toFixed(1);
      console.log("callRating", call.callRating);
    });

    const sumAllRates = callsRating.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    totalCallsRating = sumAllRates / callsRating.length;
    person.callsRating = totalCallsRating;
  }

  //Final rating
  person.overallRating = (emailRating + totalCallsRating).toFixed(1);
  //console.log(person.overallRating);
  return person;
};
