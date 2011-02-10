from django.db.models import *
from django.contrib.auth.models import User

class Team(Model):
    """Football team."""
    name = CharField(max_length=50)
    manager = ForeignKey(User, related_name='teams')
    def __unicode__(self): return "%s by %s" % (self.name, self.manager)

class Player(Model):
    """Knesset member / player / bench-boy :)"""
    team = ManyToManyField(Team, related_name="players")
    def __unicode__(self): return self.team

