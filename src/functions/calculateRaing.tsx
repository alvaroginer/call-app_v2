import { UserData } from "../components/userCard/UserCard";

export const calculateGeneralRating = (user: UserData) => {
  // Calculamos el Mail Rating
  const emailValue =
    user.emails.sent * 0.1 +
    user.emails.open * 0.2 +
    user.emails.clicked * 0.3 +
    user.emails.openRate * 0.2 +
    user.emails.block * -0.1 +
    user.emails.rebound * -0.1;
  const emailRating = ((emailValue / 2) * 5) / 10;
  user.emails.rating = emailRating;

  //Calculamos el Call Rating
  const callsRating: number[] = [];
  let totalCallsRating = 0;
  if (user.calls.length > 0) {
    user.calls.forEach((call) => {
      const callRate =
        call.customerInterest * 0.2 +
        call.objectionsRaised * 0.15 +
        call.conversionPotential * 0.2 +
        call.callClosure * 0.2 +
        call.callDuration * 0.1 +
        call.technicalQuality * 0.15;
      callsRating.push(callRate);
      call.callRating = Number(callRate.toFixed(1));
      console.log("callRating", call.callRating);
    });

    const sumAllRates = callsRating.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    totalCallsRating = sumAllRates / callsRating.length;
    user.callsRating = totalCallsRating;
  }

  //Final rating
  user.overallRating = Number((emailRating + totalCallsRating).toFixed(1));
  //console.log(user.overallRating);
  return user;
};
