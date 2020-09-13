from rest_framework import serializers
from .models import Report


class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = ('start_date', 'content', 'email', 'end_date', 'school', 'accused')
