import MeetupDetail from "../components/meetups/MeetupDetail";

const PageDetail = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg"
      title="First Meetup"
      address="Some Street 5"
      description="This is a first meetup"
    />
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: "m1",
        },
      },
      {
        params: {
          id: "m2",
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.id;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Some Street 5",
        description: "This is a first meetup",
      },
    },
  };
};

export default PageDetail;
