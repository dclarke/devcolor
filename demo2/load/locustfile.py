from locust import HttpLocust, TaskSet


def index(l):
    l.client.get("/")

class UserBehavior(TaskSet):
    tasks = {index:200}

    def on_start(self):
        pass
class WebsiteUser(HttpLocust):
    task_set = UserBehavior
    min_wait=5000
    max_wait=9000

