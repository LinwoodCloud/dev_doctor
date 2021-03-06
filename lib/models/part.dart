import 'package:dev_doctor/models/server.dart';

import 'course.dart';
import 'item.dart';
import 'items/quiz.dart';
import 'items/text.dart';
import 'items/video.dart';

class CoursePart {
  final Course course;
  final String name;
  final String description;
  final String slug;
  final List<PartItem> items;

  CoursePart({this.name, this.description, this.slug, this.items, this.course});
  CoursePart.fromJson(Map<String, dynamic> json)
      : course = json['course'],
        description = json['description'],
        name = json['name'],
        slug = json['slug'],
        items = (json['items'] as List<dynamic>).map<PartItem>((item) {
          switch (item['type']) {
            case 'text':
              return TextPartItem.fromJson(item);
            case 'video':
              return VideoPartItem.fromJson(item);
            case 'quiz':
              return QuizPartItem.fromJson(item);
            default:
              return null;
          }
        }).toList();
  Map<String, dynamic> toJson() => {
        "course": course,
        "description": description,
        "slug": slug,
        "items": items.map((e) => e.toJson())
      };

  CoursesServer get server => course.server;

  CoursePart copyWith({String name, String description, String slug, List<PartItem> items}) =>
      CoursePart(
          course: course,
          description: description ?? this.description,
          items: items ?? this.items,
          name: name ?? this.name,
          slug: slug ?? this.slug);
}
