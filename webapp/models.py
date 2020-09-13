from django.db import models
import uuid

# Create your models here.

class Report(models.Model):
    school = models.CharField(max_length=200, help_text="Enter the name of the College")
    email = models.CharField(max_length=200, help_text="Enter your email")
    location = models.CharField(max_length=200, help_text="Enter location of assault or harassment")
    accused = models.CharField(max_length=200, help_text="Enter accuser's name or description")
    start_date = models.DateField()
    end_date = models.DateField()
    content = models.TextField()
    notes = models.TextField()
    tracking_number = models.UUIDField(primary_key=True, default=uuid.uuid4,
                                       help_text='Unique ID for this particular report')
    date_of_report = models.DateTimeField(auto_now_add=True)

    STATUS = (
        ('s', "Submitted"),
        ('ur', "Under Review"),
        ('r', "Reviewed"),
        ('rc', "Reaching Conclusion"),
        ('c', "Final Conclusion")
    )

    status = models.CharField(max_length=2, choices=STATUS, blank=True, default='s', help_text="Status of report")
