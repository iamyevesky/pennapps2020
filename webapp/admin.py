from django.contrib import admin

# Register your models here.

from .models import Report


@admin.register(Report)
class ReportAdmin(admin.ModelAdmin):
    list_display = ('tracking_number', 'email', 'start_date', 'end_date')
    fields = ["tracking_number", 'email', ('start_date', 'end_date')]
