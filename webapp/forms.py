from django import forms
from webapp.models import Report
from django.forms import ModelForm
from django.core.exceptions import ValidationError
from django.utils.translation import ugettext_lazy as _
import datetime


class MakeReportForm(ModelForm):
    def clean_end_date(self):
        data = self.cleaned_data['end_date']

        if data < self.cleaned_data['start_date']:
            raise ValidationError(_('Invalid date - Assault end date is in past of start date'))

        return data

    class Meta:
        model = Report
        exclude = ['tracking_number', 'date_of_report', 'status']
