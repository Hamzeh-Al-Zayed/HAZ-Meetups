// our-domain.com/new-meetup
import { useRouter } from "next/router";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { Fragment } from "react";
import Head from "next/head";

function NewMeetupPage() {
  const router = useRouter();

  // async function addMeetupHandler(enteredMeetupData) {
  //   const response = await fetch(
  //     "https://react-http-e1c4c-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
  //     {
  //       method: "POST",
  //       body: JSON.stringify(enteredMeetupData),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );

  //   const data = await response.json();

  //   console.log(data);

  //   router.push("/");
  // }
  async function addMeetupHandler(enteredMeetupData) {
    try {
      const response = await fetch(
        "https://react-http-e1c4c-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
        {
          method: "POST",
          body: JSON.stringify(enteredMeetupData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      router.push("/");
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  }

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opps"
        ></meta>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;
