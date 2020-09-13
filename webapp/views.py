import datetime

from django.shortcuts import render
from django.shortcuts import get_object_or_404
from django.http import HttpResponseRedirect
from django.urls import reverse

from webapp.forms import MakeReportForm
from webapp.models import Report
from webapp.serializers import ReportSerializer
from rest_framework import generics


# Create your views here.
class ReportListCreate(generics.ListCreateAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer

def index(request):
    context = {}
    return render(request, 'index.html', context)


def make_report(request):
    if request.method == 'POST':

        # Create a form instance and populate it with data from the request (binding):
        report = MakeReportForm(request.POST)

        # Check if the form is valid:
        if report.is_valid():
            report.save()

            # redirect to a new URL:
            return HttpResponseRedirect('/')

    # If this is a GET (or any other method) create the default form.
    else:
        proposed_start_date = datetime.date.today()
        proposed_end_date = datetime.date.today()
        report = MakeReportForm(initial={'start_date': proposed_start_date, 'end_date': proposed_end_date})

    context = {
        'form': report
    }

    return render(request, 'webapp/make_report.html', context)


def track_report(request, pk):
    report_instance = get_object_or_404(Report, pk=pk)

    context = {
        'status': report_instance.status,
        'date_of_report': report_instance.date_of_report,
        'tracking_number': report_instance.tracking_number,
    }
    return render(request, 'webapp/track_report.html', context)
