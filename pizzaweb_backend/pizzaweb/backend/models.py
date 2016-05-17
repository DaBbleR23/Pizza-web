from django.db import models
from django.utils.encoding import python_2_unicode_compatible


# Create your models here.
@python_2_unicode_compatible  # only if you need to support Python 2
class ingredients(models.Model):

    TYPE_CHOICES = (
        ('ingredient', 'ingredient'),
        ('dough', 'dough'),
    )

    name = models.CharField(max_length=250)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    vege = models.BooleanField(default=False)
    type = models.CharField(max_length=30, choices=TYPE_CHOICES)
    description = models.CharField(max_length=250)
    multiplicity = models.PositiveIntegerField(default=1)
    def __str__(self):
        return self.name
