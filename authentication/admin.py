from django.contrib import admin
from authentication.models import Client
from home.models import Notification, DashboardAccountStatus, PendingActionable, WatchOutPoint, StatutoryCompliance
from cprofile.models import Company
from accounts.models import Ratio
from taxes.models import TaxAlert, ITMonthlyStatus, ITQuarterlyStatus, GSTMonthlyStatus, GSTQuarterlyStatus

# Register your models here.

# Inlines related to Home App (Dashboard section)
class NotificationInline(admin.TabularInline):
    model = Notification
    extra = 0
class DashboardAccountStatusInline(admin.TabularInline):
    model = DashboardAccountStatus
    extra = 0
class PendingActionableInline(admin.TabularInline):
    model = PendingActionable
    extra = 0
class WatchOutPointInline(admin.TabularInline):
    model = WatchOutPoint
    extra = 0
class StatutoryComplianceInline(admin.TabularInline):
    model = StatutoryCompliance
    extra = 0

# Inline related to Accounts App (Ratio actions)
class RatioInline(admin.TabularInline):
    model = Ratio
    extra = 0

# Inline related to Taxes App (Tax section)
class TaxAlertInline(admin.TabularInline):
    model = TaxAlert
    extra = 0
class ITMonthlyStatusInline(admin.TabularInline):
    model = ITMonthlyStatus
    extra = 0
class ITQuarterlyStatusInline(admin.TabularInline):
    model = ITQuarterlyStatus
    extra = 0
class GSTMonthlyStatusInline(admin.TabularInline):
    model = GSTMonthlyStatus
    extra = 0
class GSTQuarterlyStatusInline(admin.TabularInline):
    model = GSTQuarterlyStatus
    extra = 0

# Inline related to Cprofile App (Company profile)
class CompanyInline(admin.TabularInline):
    model = Company
    extra = 0


class ClientAdmin(admin.ModelAdmin):
    inlines = [
        NotificationInline,
        CompanyInline,
        DashboardAccountStatusInline,
        PendingActionableInline,
        WatchOutPointInline,
        StatutoryComplianceInline,
        RatioInline,
        TaxAlertInline,
        ITMonthlyStatusInline,
        ITQuarterlyStatusInline,
        GSTMonthlyStatusInline,
        GSTQuarterlyStatusInline
    ]

admin.site.register(Client, ClientAdmin)