class Activity {
  constructor({ id, title, description, imgUrl }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repository {
  constructor({ activities = [] } = {}) {
    this.activities = activities;
    this.counterActivity = 0;
  }

  getAllActivities() {
    return this.activities;
  }

  createActivity(activity) {
    const newActivity = new Activity(activity);

    this.activities.push(newActivity);
    this.counterActivity++;

    return newActivity;
  }

  deleteActivity(id) {
    this.activities = this.activities.map((activity) => activity.id !== id);
  }
}

export { Activity, Repository };
