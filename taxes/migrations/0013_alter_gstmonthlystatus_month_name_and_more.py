# Generated by Django 4.0.5 on 2022-08-11 11:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('taxes', '0012_alter_taxalert_raised_on'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gstmonthlystatus',
            name='month_name',
            field=models.IntegerField(choices=[(1, 'Jan'), (2, 'Feb'), (3, 'Mar'), (4, 'Apr'), (5, 'May'), (6, 'Jun'), (7, 'Jul'), (8, 'Aug'), (9, 'Sep'), (10, 'Oct'), (11, 'Nov'), (12, 'Dec')], default=1),
        ),
        migrations.AlterField(
            model_name='itmonthlystatus',
            name='month_name',
            field=models.IntegerField(choices=[(1, 'Jan'), (2, 'Feb'), (3, 'Mar'), (4, 'Apr'), (5, 'May'), (6, 'Jun'), (7, 'Jul'), (8, 'Aug'), (9, 'Sep'), (10, 'Oct'), (11, 'Nov'), (12, 'Dec')], default=1),
        ),
    ]
